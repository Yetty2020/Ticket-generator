import { TicketTypeDetails } from "../data"

export default function TicketType() {
  const handleTicketSelection = (ticket) => {
    localStorage.setItem('selectedTicket', JSON.stringify(ticket));
  }

  return (
   <section className="flex flex-col lg:items-center text-white">
   <div className="w-full h-1 rounded-sm"></div>
    <h4 className="self-start text-base">Select Ticket Type:</h4>
    <div className="flex flex-col lg:flex-row lg:justify-between lg:w-full border rounded-[24px] border-border-color lg:p-[24px] lg:flex-start gap-6 p-[16px]">{TicketTypeDetails.map((item, index)=>(
        <button 
          type="button" 
          key={index}
          onClick={() => handleTicketSelection(item)}
          className="flex flex-col items-start border-2 border-border-color rounded-[12px] p-[12px] flex-1 cursor-pointer
          // Hover state
        hover:bg-hover-color
        
        // Active state
        active:bg-selected-color active:scale-95
        
        // Focus state
       focus:ring focus:bg-selected-color focus:ring-offset focus:outline-selected-color
        
        // Smooth transitions"
        >
            <p className="text-2xl font-bold">{item.price}</p>
            <h1 className="text-base mt-[12px] uppercase">{item.name}</h1>
            <p className="text-sm">{item.date}</p>
        </button>
    ))}</div>
   </section>
  )
}
