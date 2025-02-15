import { Image } from 'cloudinary-react';

const DisplayImage = () => {
  // Get the stored publicId from localStorage
  const imageId = localStorage.getItem('imagePublicId');
  
  return (
    <div>
      <Image 
        cloudName="your_cloud_name"
        publicId={imageId}
        width="200"
        crop="scale"
      />
    </div>
  );
};

export default DisplayImage;
