import { FaPlus } from "react-icons/fa6";

const OurOfferings = () => {
  return (
    <div className="md:w-1/2 md:pl-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl flex gap-4 md:justify-end items-center text-[#38D7F5]">
          <FaPlus size={25} className="my-auto text-[#CC187C]" />
          WHAT WE OFFER
        </h1>
      </div>
      {/*<div className="space-y-6">
        {/*<div className="flex md:justify-end mr-5 md:mr-0">
          <div className="bg-[#90EE90] h-28 md:my-8 w-[1px]"></div>
        </div>
        <div className="group flex items-center justify-between p-4 bg-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-800">
          <h1 className="md:text-right text-xl text-[#90EE90] group-hover:text-[#38D7F5] transition-colors duration-300 cursor-pointer">DISCOVER GAMES EASILY</h1>
          <h1 className="md:text-right text-xl text-[#90EE90] group-hover:text-[#38D7F5] transition-colors duration-300 cursor-pointer">SIMPLE ONBOARDING</h1>
          <h1 className="md:text-right text-xl text-[#90EE90] group-hover:text-[#38D7F5] transition-colors duration-300 cursor-pointer">TOURNAMENTS</h1>
          <h1 className="md:text-right text-xl text-[#90EE90] group-hover:text-[#38D7F5] transition-colors duration-300 cursor-pointer">BET & PREDICT</h1>
          <h1 className="md:text-right text-xl text-[#90EE90] group-hover:text-[#38D7F5] transition-colors duration-300 cursor-pointer">NFTs</h1>
        </div>
      </div>*/}

      <div className="space-y-6">
        {[
          "DISCOVER GAMES EASILY",
          "SIMPLE ONBOARDING",
          "TOURNAMENTS",
          "BET & PREDICT",
          "NFTs",
        ].map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-between p-4 bg-gray-900 rounded-lg transition-all duration-300 hover:bg-gray-800"
          >
            <h3 className="text-xl text-[#90EE90] group-hover:text-[#38D7F5] transition-colors duration-300">
              {item}
            </h3>
            <FaPlus className="text-[#CC187C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurOfferings;
