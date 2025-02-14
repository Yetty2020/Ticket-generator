


import { useLocation } from 'react-router-dom';

const ProgressBar = () => {
  const location = useLocation();
  
  const getProgress = () => {
    switch(location.pathname) {
      case '/':
        return 33;
      case '/TicketSelection/Hero':
        return 66;
      case '/TicketReady/Hero':
        return 100;
      default:
        return 0;
    }
  };

  const steps = [
    { label: 'Details', path: '/' },
    { label: 'Preview', path: '/TicketSelection/Hero' },
    { label: 'Download', path: '/TicketReady/Hero' }
  ];


  return (
    <div className="w-full max-w-2xl mx-auto px-4 mb-8">
      <div className="relative pt-4">
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${getProgress()}%` }}
          />
        </div>
        
        <div className="flex justify-between mt-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center relative
                ${location.pathname === step.path ? 'text-[#1F2937] font-bold' : 'text-gray-500'}`}
            >
              <div className={`w-6 h-6 rounded-full mb-2 flex items-center justify-center border-2
                ${location.pathname === step.path ? 'bg-[#1F2937] border-[#1F2937]' : 'bg-white border-gray-300'}`}
              >
                <span className={location.pathname === step.path ? 'text-white' : ''}>{index + 1}</span>
              </div>
              <span className="text-sm whitespace-nowrap">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
