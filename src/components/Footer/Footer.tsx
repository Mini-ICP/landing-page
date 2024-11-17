import Me from "../Hero/Me";

const Footer = () => {
  return (
    <div className="md:flex justify-between align-middle mt-24 md:mt-48 mb-4">
      <div className="md:w-1/12 ">
        <div className="md:-rotate-90 md:-ml-16">
          <div className="flex gap-6 justify-center">
            <h1 className="text-[#90EE90] hover:text-[#38D7F5] cursor-pointer transition-colors">DISCOVER</h1>
            <h1 className="text-[#90EE90] hover:text-[#38D7F5] cursor-pointer transition-colors">CONTACT</h1>
            <h1 className="text-[#90EE90] hover:text-[#38D7F5] cursor-pointer transition-colors">REGISTER</h1>
          </div>
        </div>
      </div>
      <div className="md:w-11/12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 my-8 md:my-0">
          <div className="md:w-4/12 md:relative bottom-20">
            <h1 className="text-4xl text-center md:text-start text-[#38D7F5]">START PLAYING.</h1>
            <h1 className="text-4xl text-center md:text-start text-[#38D7F5]">START WINNING.</h1>
          </div>
          <div className="md:w-3/12 hidden md:block md:relative bottom-20 font-inter">
            <span className="text-[#CC187C]">Follow.</span>
            <hr className="opacity-30 my-4" />
            <span className="text-[#90EE90] hover:text-[#38D7F5]">x.com/icp_mini</span>
          </div>
          <div className="md:w-3/12 hidden md:block md:relative bottom-20 font-inter">
              <span className="text-[#CC187C]">Partnership</span>
              <hr className="opacity-30 my-4" />
              <span className="text-[#90EE90] hover:text-[#38D7F5] transition-colors">aakipandap@gmail.com</span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center md:flex-row md:justify-between">
          <div className="flex justify-center">
          <Me />
          </div>
          <h1 className="font-inter md:text-start text-center text-[#90EE90]">Mini-ICP 2024, All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
