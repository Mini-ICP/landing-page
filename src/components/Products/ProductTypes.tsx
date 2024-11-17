import { FaPlus } from "react-icons/fa6"

const ProductTypes = () => {
  return (
    <div className="mb-24 md:my-0">
        <div className="">
            <h1 className="text-4xl flex gap-4 text-[#38D7F5]">
                <FaPlus size={25} className="my-auto text-[#CC187C]" />
                WHY <br /> CHOOSE US?</h1>
        </div>
        <div className="w-full flex justify-end">
            <div className="w-20 mt-16 -mr-8 rotate-90 text-[#CC187C]">0.0.2</div>
        </div>
    </div>
  )
}

export default ProductTypes