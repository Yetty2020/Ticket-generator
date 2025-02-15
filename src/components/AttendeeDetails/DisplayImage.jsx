
import UploadPicture from './UploadPicture'

export default function DisplayImage() {
  return (
    <div className="flex flex-col gap-4 mb-6">
    <p className="text-white text-xl font-Roboto">Upload Profile Picture</p>
    <div className="  lg:border lg:border-border-color bg-imagebg-color ">
   
    <UploadPicture />
      
    </div>
    </div> 
  )
}
