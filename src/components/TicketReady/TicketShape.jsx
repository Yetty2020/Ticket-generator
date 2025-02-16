import ticket from "../../../public/images/ticket.svg"
import user from "../../../public/images/user.svg"


const TicketShape = () => {

    const imageUrl = localStorage.getItem('imageUrl') || user;

    const formData = JSON.parse(localStorage.getItem('formData'))
  const useStoredTicket = () => {
    try {
        const ticket = JSON.parse(localStorage.getItem('selectedTicket'));
        return ticket || null;
    } catch (error) {
        console.log(error)
        return null;
    }
}
const selectedTicket = useStoredTicket();
    
    if (!selectedTicket) {
        return <div className="text-white">Please select a ticket first</div>;
    }

    


    
    return (
      <div className=" mx-auto relative w-fit mx-auto text-white mb-8  ">

      <img src={ticket} alt="" className="w-[400px]"/>
      <div className=" absolute inset-0  top-[20px] bottom-[140px] lg:top-[40px] lg:bottom-[180px] px-[20px]">
      <div className="border border-border-color flex flex-col justify-between  rounded-[24px] px-[14px] py-[20px] h-full">
        <header className="flex flex-col justify-center items-center gap-1">
        <h1 className=" text-4xl  font-RoadRage text-white">Techember Fest ”25</h1>
        <p>📍 04 Rumens road, Ikoyi, Lagos</p>
        <p>📅 March 15, 2025 | 7:00 PM</p>
        </header>

        <div className="mx-auto px-[30px] ">
        <img 
        src={imageUrl} 
        alt="Uploaded ticket" 
        className="w-full border-2 border-border-color rounded-[12px]  "
      />
            
        </div>

        
        

        <div className="border border-border-color rounded-[14px] flex flex-col gap-6 p-[10px]">
            <div className="flex justify-between flex-1">
                <div className="flex flex-col gap-3 w-1/2 ">
                    <p>Enter Your Name:</p>
                    <p>{formData.name}</p>
                </div>
                <div className="flex flex-col gap-3 w-1/2 flex-start ">
                    <p>Enter your Email</p>
                    <p className="w-1/2">{formData.email}</p>
                </div>
            </div>
            <div className="flex justify-between flex-1 border-t border-border-color pt-[4px]">
            <div className="flex flex-col flex-1 ">
                    <p>Ticket Type:</p>
                    <p>{selectedTicket.price}</p>
                </div>
                <div className="flex flex-col flex-1 ">
                    <p>Ticket for:</p>
                    <p>1</p>
                </div>
            </div>
            <div className="border-t border-border-color pt-[4px]">
                <p>Special Message</p>
                <p>{formData.message === ''? 'nil' : formData.message }</p>

            </div>
        </div>
        </div>
        
        </div>
        
      </div>
    );
  };
  
  export default TicketShape;
  