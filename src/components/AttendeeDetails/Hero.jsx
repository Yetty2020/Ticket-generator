import UploadPicture from "./UploadPicture"
import FormInput from "./FormInput"
import ProgressBar from "../Fixed/ProgressBar"





export default function Hero() {
  return (
    <div className="px-[20px] py-[48px]">
    <div className="flex flex-col  lg:w-[700px] m-auto border-border-color border rounded-[32px] lg:px-[48px]  ">
    <ProgressBar/>
    
    <UploadPicture/>

    <FormInput/>
   
    
    
    
      
    </div>
    </div>
  )
}
