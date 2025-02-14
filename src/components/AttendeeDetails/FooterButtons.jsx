import { useNavigate } from "react-router-dom"
import { useFormLogic } from "./formLogic";
// import {useFormContext} from '../Context/FormContext'

export default function FooterButtons() {

    const navigate = useNavigate()
    const { errors} = useFormLogic()

    const isFormValid = !errors.name && !errors.email

    const handleTicketNavigation = () => {
      if (isFormValid) {
        navigate("/TicketReady/Hero");
      }
    };

    // turn (
    // <div>
    // <button type="button" onClick={()=>navigate("/")}>Cancel</button>
    // <button type="button" onClick={()=>navigate("/attendee-details")}>Next</button>


//     </div>
//   )
  return (
    <div>
    <button type="button" onClick={()=>navigate(-1)}>Back</button>
    <button
      type="button"
      onClick={handleTicketNavigation}
      disabled={!isFormValid}
      className={`${
        isFormValid 
          ? 'bg-blue-500 hover:bg-blue-600' 
          : 'bg-gray-300 cursor-not-allowed'
      } text-white px-4 py-2 rounded-md transition-colors`}
    >
      Get Your Free Ticket
    </button>
      
    </div>
  )
}
