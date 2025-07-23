import HeaderSection from "./HeaderSection";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const ComapnyLogos = () => {
    const logos = [
        {icon: FaApple, name: "Apple"},
        {icon: FaGoogle, name: "Google"},  
        {icon: FaAmazon, name: "Amazon"},  
        {icon: FaMicrosoft, name: "Microsoft"},  
        {icon: FaFacebook, name: "Facebook"},  
    ]
  return (
    <div style={{ backgroundColor: "#F2F4F8" }}>
      <div className="max-w-screen-2xl container mx-auto py-20 px-5">
        <HeaderSection
          subheading="Our trusted partners"
          heading="Companies We've Worked With"
          description="Easily locate Oracle partners with expertise in building, selling, and providing value-added services for Oracle technology."
        />
        <div className="relative overflow-hidden border-y-[1px]">
            <div className="flex justify-around items-center md:space-x-14 space-x-8 animate-scroll">
                {logos.map((Logo, index) =>(
                    <div key={index} className="flex justify-center items-center rounded-full p-6 w-28 hover:scale-110 transition transform">
                        <Logo.icon className="text-blue-600 text-4xl" title={Logo.name}/>
                    </div>
                ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default ComapnyLogos;
