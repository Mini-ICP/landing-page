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
        <img src={Logo} className="w-10 h-10" />
      </div>
      <div className="hidden md:flex gap-8">
        <button>HOME</button>
        <button>TOURNAMENT</button>
        <button>ABOUT US</button>
        <button>CONTACT</button>
      </div>
      <div className="my-auto">
        
        <IoMenu size={25} />
      </div>
    </motion.div>
    <div className="absolute -left-32 -top-32 -z-10 w-60 h-60 bg-p2 rounded-full"></div>
    <div className="absolute right-1 md:right-3 -top-28 -z-10 w-20 h-60 bg-p2 rounded-br-[10rem]"></div>
    </>
  );
};

export default Navbar;