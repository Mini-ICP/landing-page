import DiscoverButton from "../shared/DiscoverButton"

const WeDo = () => {
  return (
    <div className="mb-72">
        <div className="md:mt-0 flex gap-6 my-2">
            <h1 className="text-5xl text-[#CC187C]">DISCOVER</h1>
            <div className="leading-3">
              <h1 className="mt-2 text-[#90EE90]">ALL YOUR WEB3 GAMES,</h1>
              <h1 className="mt-2 text-[#90EE90]">ONE PLATFORM</h1>
            </div>
        </div>
        <div className="flex gap-6 my-2">
            <h1 className="text-5xl text-[#CC187C]">JUMP</h1>
            <h1 className="mt-2 text-[#90EE90]">SIMPLE ONBOARDING</h1>
        </div>
        <div className="flex gap-6 my-2">
            <h1 className="text-5xl text-[#CC187C]">COMPETE</h1>
            <div className="leading-3">
              <h1 className="mt-2 text-[#90EE90]">BET, COMPETE &</h1>
              <h1 className="mt-2 text-[#90EE90]">WIN IN REAL TIME</h1>
            </div>
        </div>
        <div className="flex gap-6 my-2">
            <h1 className="text-5xl text-[#CC187C]">JOIN</h1>
            <div className="leading-3">
              <h1 className="mt-2 text-[#90EE90]">SAFE, SEAMLESS &</h1>
              <h1 className="mt-2 text-[#90EE90]">REWARDING</h1>
            </div>
        </div>
        <div className="mt-8">
        <DiscoverButton />
        </div>
    </div>
  )
}

export default WeDo