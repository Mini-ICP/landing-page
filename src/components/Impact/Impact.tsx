import { FaPlus } from "react-icons/fa6";
import Road from "../../assets/img10.png";
import Video from "../../assets/img15.png";
import DiscoverButton from "../shared/DiscoverButton";


const Impact = () => {
  return (
    <div className="pt-24 pl-4  w-full">
      <div className="flex justify-end">
        <div className="w-20 -ml-8 rotate-90 text-[#CC187C]">0.0.4</div>
      </div>
      <div className="md:flex mt-8">
        <div className="md:w-1/3">
          <div className="relative md:w-[30rem] flex z-50">
            <img src={Road} className="w-full" />
          </div>
          <div>
            <h1 className="text-[2rem] text-[#38D7F5]">READY TO DIVE IN?</h1>
            <p className="font-inter my-4 leading-[3rem] md:pr-12">
              We're reshaping Web3 gaming with India's gaming community in mind.
              Mini-ICP is where Web3 meets seamless gaming, making it fun and intuitive
              for anyone-from casual gamers to dedicated e-sport fans.
            </p>
            <div className="my-8">
              <DiscoverButton />
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl flex gap-4 md:justify-end md:mr-10 text-[#38D7F5]">
            <FaPlus size={25} className="my-auto text-[#CC187C]" />
            JOIN US
          </h1>
          <div className="flex justify-end mt-8 max-h-[50rem] overflow-y-hidden">
            <img src={Video} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
