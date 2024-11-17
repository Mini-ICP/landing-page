import Image from "../../assets/img8.png";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Slamtings = () => {
  return (
    <div className="flex gap-0 align-bottom">
        <div className="cursor-pointer">
            {/*<div className="absolute -z-10 w-32 -bottom-10 h-60 bg-[#2D3F6D] rounded-br-[10rem]"></div>*/}
            <img src={Image} className="h-56" />
        </div>
        <div className="flex flex-col justify-end h-56">
            <h1 className="my-2">Play</h1>
            <h1 className="text-right my-2">Compete</h1>
            <div className="flex justify-end gap-8 mt-2 mb-6 cursor-pointer">
                <FaMinus className="hover:text-p1" />
                <FaPlus className="hover:text-p1" />
            </div>
        </div>
    </div>
  )
}

export default Slamtings