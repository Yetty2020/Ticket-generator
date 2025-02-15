import { useLocation } from 'react-router-dom';

const ProgressBar = () => {
  const location = useLocation();
  
  const getProgress = () => {
    switch(location.pathname) {
      case '/':
        return 33;
      case '/AttendeeDetails/Hero':
        return 66;
      case '/TicketReady/Hero':
        return 100;
      default:
        return 0;
    }
  };

  const getCurrentLabel = () => {
    switch(location.pathname) {
      case '/':
        return 'Enter Your Details';
      case '/AttendeeDetails/Hero':
        return 'Choose Your Ticket';
      case '/TicketReady/Hero':
        return 'Get Your Ticket';
      default:
        return '';
    }
  };

  const steps = [
    { label: getCurrentLabel(), path: '/' },
    { label: getCurrentLabel(), path: '/AttendeeDetails/Hero' },
    { label: getCurrentLabel(), path: '/TicketReady/Hero' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mb-8">
      <div className="relative pt-4">
      <div className="flex justify-between mt-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center relative
                ${location.pathname === step.path ? 'text-white font-bold' : 'text-gray-500'}`}
            >
              
              {location.pathname === step.path && (
                <span className="text-sm whitespace-nowrap">{step.label}</span>
                
              )}
            </div>
          ))}
        </div>
        <div className="w-full h-2 bg-inactiveprogressbar-color rounded-full">
          <div 
            className="h-full bg-progressbar-color rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${getProgress()}%` }}
          />
        </div>
        
        
      </div>
    </div>
  );
};

export default ProgressBar;
