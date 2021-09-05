import { clearPage, randomPage } from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={clearPage}>Clear</button>
      <button className="w-36" onClick={randomPage}>Random color</button>
    </div>
  )
}

export default Utility