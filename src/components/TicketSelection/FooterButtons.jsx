import { useNavigate } from "react-router-dom"

export default function FooterButtons() {

    const navigate = useNavigate()

    // turn (
    // <div>
    // <button type="button" onClick={()=>navigate("/")}>Cancel</button>
    // <button type="button" onClick={()=>navigate("/attendee-details")}>Next</button>


//     </div>
//   )
  return (
    <div className="flex flex-col lg:flex-row justify-between flex-1 text-white gap-6">
    <button type="button" onClick={()=>navigate("/")} className="border-2 border-border-color text-border-color rounded-[12px] px-[12px] py-[15px] w-full
     // Hover state
        hover:bg-hover-color
        hover:text-white
        
        // Active state
        active:bg-selected-color active:scale-95 font-bold
        ">Cancel</button>
    <button type="button" onClick={()=>navigate("/AttendeeDetails/Hero")} className="w-full bg-border-color rounded-[12px] px-[12px] py-[15px]
    // Hover state
        hover:bg-hover-color
        hover:text-white
        
        // Active state
        active:bg-selected-color active:scale-95 font-bold">Next</button>
    
      
    </div>
  )
}
