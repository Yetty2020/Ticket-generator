import { GrLocationPin } from "react-icons/gr";

export default function EventDetails() {
  return (
    <section className="flex flex-col items-center justify-content border border-border-color rounded-[24px] text-white py-[16px] lg:py-[24px] mb-4 bg-gradient-to-b from-gradientbg-color via-primary-color to-primary-color">


    <div className="flex flex-col items-center justify-content px-[24px] gap-[10px]">
      
    <h1 className=" text-5xl lg:text-6xl font-RoadRage text-white">Techember Fest ”25</h1>
        <p className="font-Roboto md:text-sm lg:text-base text-center w-9/12 lg:w-3/5 ">Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
    </div>
      
        <div className="flex sm:flex-col sm:items-center lg:flex-row lg:gap-3 mt-[16px] lg:mt-[8px]">
            <div className="flex items-center sm:items-center">
            <GrLocationPin className="text-red-500"/>
           
                <p>[Event Location]</p>
            </div>
            <p className="hidden lg:flex">||</p>
            <div>
                <p>March 15, 2025 | 7:00 PM</p>
            </div>
        </div>
    </section>
  )
}
