import Image from "../../assets/img9.jpeg";
//import Gradient from "../../assets/bg.png";
//import DiscoverButton from "../shared/DiscoverButton";
import OurOfferings from "./OurOfferings";

const Services = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="pt-24 pl-4 max-w-7xl">
        {/*<img
          src={Gradient}
          className="w-full mx-auto absolute -right-[0rem] -z-10 opacity-50 hidden md:block"
        />*/}
        <div className="">
          <div className="w-20 -ml-8 rotate-90 text-[#CC187C]">0.0.3</div>
        </div>
        <div className="md:flex mt-12 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#CC187C] opacity-50 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#38D7F5] opacity-50 rounded-full blur-xl"></div>
              <div className="rounded-br-[12rem] relative z-10 h-[36rem] w-[30rem] overflow-hidden">
                <img src={Image} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
          {/*(<div className="md:w-1/3 md:pr-20 flex align-middle">
            <div className="my-auto">
              <h1 className="text-4xl my-8 text-[#38D7F5]">ARE YOU IN?</h1>
              <p className="font-inter my-4 leading-[3rem]">
                We're building a new gaming culture - where fun meets blockchain and community
                meets competiton. Mini-ICP is more than a platform; it's where gamers discover, connect and win
                together.
              </p>
              <div className="my-8">
                <DiscoverButton />
              </div>
            </div>
          </div>*/}
        
          <OurOfferings />
        </div>
      </div>
    </div>
  );
};

export default Services;
