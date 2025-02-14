import UploadPicture from "./UploadPicture"
import FormInput from "./FormInput"




export default function Hero() {
  return (
    <div className="flex flex-col  lg:w-[700px] m-auto border-border-color border rounded-[32px] lg:px-[48px]  ">
    <div className="flex flex-col  lg:w-[700px] m-auto border-border-color border rounded-[32px] lg:px-[48px]  ">
    <UploadPicture/>

    <FormInput/>
    </div>
    
    
    
      
    </div>
  )
}
