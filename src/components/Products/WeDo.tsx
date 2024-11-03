import DiscoverButton from "../shared/DiscoverButton"

const WeDo = () => {
  return (
    <div className="mb-72">
        <div className="md:mt-0 flex gap-6 my-2">
            <h1 className="text-5xl">DISCOVER</h1>
            <div className="leading-3">
              <h1 className="mt-2">ALL YOUR WEB3 GAMES,</h1>
              <h1 className="mt-2">ONE PLATFORM</h1>
            </div>
        </div>
        <div className="flex gap-6 my-2">
            <h1 className="text-5xl">JUMP</h1>
            <h1 className="mt-2">SIMPLE ONBOARDING</h1>
        </div>
        <div className="flex gap-6 my-2">
            <h1 className="text-5xl">COMPETE</h1>
            <div className="leading-3">
              <h1 className="mt-2">BET, COMPETE &</h1>
              <h1 className="mt-2">WIN IN REAL TIME</h1>
            </div>
        </div>
        <div className="flex gap-6 my-2">
            <h1 className="text-5xl">JOIN</h1>
            <div className="leading-3">
              <h1 className="mt-2">SAFE, SEAMLESS &</h1>
              <h1 className="mt-2">REWARDING</h1>
            </div>
        </div>
        <div className="mt-8">
        <DiscoverButton />
        </div>
    </div>
  )
}

export default WeDo