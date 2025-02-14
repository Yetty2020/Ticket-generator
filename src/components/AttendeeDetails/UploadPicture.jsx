import { useFormLogic } from './formLogic'

export default function UploadPicture() {

  const {handleImageUpload, formRules, handleDrag, isDragging, handleDrop, imagePreview, errors} = useFormLogic();

  return (
    <div>
    <div 
  className={`dropzone ${isDragging ? 'dragging' : ''} text-white`}
  onDragEnter={handleDrag}
  onDragLeave={handleDrag}
  onDragOver={handleDrag}
  onDrop={handleDrop}
>
  
  <input 
    type="file" 
    accept="image/*"
    onChange={handleImageUpload}
  />

  <div>
  <input 
    type="hidden" 
    {...formRules.avatarUrl} 
  />
  {errors.avatarUrl && <p className="error">{errors.avatarUrl.message}</p>}
  </div>
  <div className='w-full bg-imagebg-color'>
  {imagePreview && (
  <div className=" flex justify-center items-center">
    <img 
      src={imagePreview} 
      alt="Preview" 
      style={{ width: '200px', height: '200px', objectFit: 'cover' }}
    />
  </div>
)}


  </div>
 
 
</div>

      
    </div>
  )
}
