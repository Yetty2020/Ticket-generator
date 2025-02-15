import { useState } from 'react';

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState(localStorage.getItem('imageUrl') || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async (file) => {
    if (!file) return;
    
    setIsLoading(true);
    setError(null);
    

    try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');

    console.log('Making request to Cloudinary');
    
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dj5oh5gec/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    
    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', data);
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Upload failed');
    }

    setImageUrl(data.secure_url);
    localStorage.setItem('imageUrl', data.secure_url);
  } catch (err) {
    console.log('Detailed error:', err);
    setError('Failed to upload image. Please try again.');
  }
};

  return (
    <div className="relative w-[300px] h-[300px] border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleUpload(e.target.files[0])}
        className="hidden"
        id="imageInput"
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <span className="text-white">Uploading...</span>
        </div>
      )}

      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white p-2 text-sm">
          {error}
        </div>
      )}

      {!imageUrl ? (
        <label
          htmlFor="imageInput"
          className="flex items-center justify-center w-full h-full cursor-pointer"
        >
          <span className="text-gray-500">Upload your picture</span>
        </label>
      ) : (
        <div className="relative w-full h-full group">
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-full h-full object-cover"
          />
          <label
            htmlFor="imageInput"
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          >
            <span className="text-white">Upload your picture</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
