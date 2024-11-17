import { IoMenu } from "react-icons/io5";
//import { CgMenuGridO } from "react-icons/cg";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
    <motion.div
      initial={{ y: -200, opacity: 0, scale: 0 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0, delay: 0.1 }}
      className="flex justify-between align-middle my-div"
    >
      <div className="my-auto">
        <img src={Logo} className="w-12 h-12" />
      </div>
      <div className="hidden md:flex gap-8">
        <a href="https://nrfw4-5qaaa-aaaao-qeyzq-cai.icp0.io/"><button className="text-[#90EE90] hover:text-[#38D7F5] transition-colors">HOME</button></a>
        <a href="https://nrfw4-5qaaa-aaaao-qeyzq-cai.icp0.io/"><button className="text-[#90EE90] hover:text-[#38D7F5] transition-colors">TOURNAMENT</button></a>
        <a href="https://nrfw4-5qaaa-aaaao-qeyzq-cai.icp0.io/"><button className="text-[#90EE90] hover:text-[#38D7F5] transition-colors">ABOUT US</button></a>
        <a href="https://nrfw4-5qaaa-aaaao-qeyzq-cai.icp0.io/"><button className="text-[#90EE90] hover:text-[#38D7F5] transition-colors">CONTACT</button></a>
      </div>
      <div className="my-auto">
        
        <IoMenu size={25} />
      </div>
    </motion.div>
    {/*<div className="absolute -left-32 -top-32 -z-10 w-60 h-60 bg-[#2D3F6D] rounded-full"></div>*/}
    {/*<div className="absolute right-1 md:right-3 -top-28 -z-10 w-20 h-60 bg-[#783666] rounded-br-[10rem]"></div>*/}
    </>
  );
};

export default Navbar;
