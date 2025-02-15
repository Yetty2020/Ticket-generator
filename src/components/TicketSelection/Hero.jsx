
import EventDetails from './EventDetails.jsx'
import TicketType from './TicketType.jsx'
import TicketNumber from './TicketNumber.jsx'
import FooterButtons from './FooterButtons.jsx'




export default function Hero() {
  return (
    <div className="flex flex-col  lg:w-[700px] m-auto border-border-color border rounded-[32px] lg:px-[48px]  ">

    <div className="flex flex-col  lg:w-[700px] m-auto border-border-color border rounded-[32px] lg:px-[48px]  " >

    <EventDetails/>
    <TicketType/>
    <TicketNumber/>
    <FooterButtons/>
    </div>
  
    
      
    </div>
  )
}
