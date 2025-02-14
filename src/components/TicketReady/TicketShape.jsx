const TicketShape = () => {

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
        return <div>Please select a ticket first</div>;
    }

    
    return (
      <div className="flex flex-col h-[600px] lg:w-[320px] m-4 border border-border-color relative bg-ticketbg-color mx-auto">
        {/* Main Content Section (70% height) */}
        <div className="h-[80%] relative border border-border-color p-[20px] rounded-[24px]">
        <div className="border border-border-color flex flex-col rounded-[24px] p-[14px]">
        <header className="flex flex-col justify-center items-center gap-1">
        <h1 className=" text-4xl  font-RoadRage text-white">Techember Fest ”25</h1>
        <p>📍 04 Rumens road, Ikoyi, Lagos</p>
        <p>📅 March 15, 2025 | 7:00 PM</p>
        </header>

        <div>
            
        </div>

        
        

        <div className="border border-border-color flex flex-col gap-3 p-[4px]">
            <div className="flex justify-between flex-1">
                <div className="flex flex-col w-1/2">
                    <p>Enter Your Name:</p>
                    <p>{formData.name}</p>
                </div>
                <div className="flex flex-col w-1/2">
                    <p>Enter your Email</p>
                    <p className="w-1/2">{formData.email}</p>
                </div>
            </div>
            <div className="flex justify-between flex-1">
            <div className="flex flex-col">
                    <p>Ticket Type:</p>
                    <p>{selectedTicket.price}</p>
                </div>
                <div>
                    <p>Ticket for:</p>
                    <p>1</p>
                </div>
            </div>
            <div>
                <p>Special Message</p>
                <p>{formData.message === ''? 'nil' : formData.message }</p>

            </div>
        </div>
        
        </div>
          
        </div>
  
        {/* Tear Effect Line (at 60% height) */}
        <div className="w-full border-t-2 border-dashed border-border-color" />
  
        {/* Bottom Section (30% height) */}
        <div className="h-[20%] p-6 bg-ticketbg-color flex flex-col items-center">
          <img 
            src="path-to-your-barcode-image.png" 
            alt="Barcode"
            className="w-full h-24 object-contain bg-white p-2"
          />
        </div>
  
        {/* Top Edge Circles */}
        <div className="absolute -left-4 top-0 w-8 h-8 bg-primary-color border border-primary-color rounded-full" />
        <div className="absolute -right-4 top-0 w-8 h-8 bg-primary-color border border-primary-color rounded-full" />
  
        {/* Tear Line Circles (at 60% height) */}
        <div className="absolute -left-4 top-[78%] w-8 h-8 bg-primary-color border border-primary-color rounded-full" />
        <div className="absolute -right-4 top-[78%] w-8 h-8 bg-primary-color border border-primary-color rounded-full" />
  
        {/* Bottom Edge Circles */}
        <div className="absolute -left-4 bottom-0 w-8 h-8 bg-primary-color border border-primary-color rounded-full" />
        <div className="absolute -right-4 bottom-0 w-8 h-8 bg-primary-color border border-primary-color rounded-full" />
      </div>
    );
  };
  
  export default TicketShape;
  