import { FaArrowRightLong } from "react-icons/fa6";
// import logo from "../../assets/logo.png"
import two from "../../../public/images/ticz.svg"
import logo from "../../../public/images/logo.svg"

export default function Navbar() {
  return (
    <div className="lg:px-[120px] px-[12px] ">
    
        <div className="flex justify-between items-center px-[16px] border-2 border-border-color border-solid rounded-[16px] text-white font-Roboto ">
   
   <div className="flex">
   <img src={logo} alt="" />
   <img src={two} alt="" />
   </div>
   <div className="lg:flex gap-[16px] hidden">
       <a href="">Events</a>
       <a href="">About</a>
       <a href="">Ticket</a>
       <a href="">My Project</a>
   </div>
   <button className="flex items-center gap-[8px] px-[24px] py-[16px] bg-white text-black">
       <a type="button" className="">My Tickets</a>
       <FaArrowRightLong/>
   </button>

       
      
   </div>
   </div>

    
  )
}

