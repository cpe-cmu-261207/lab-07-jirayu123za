import { setColorPick, PixelPainterStore } from "../stores/PixelPainterStore"

type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {

  //modify this function to highlight correctly
  const state = PixelPainterStore.useState()

  const computeRingSize = () => {

    if (color === state.colorPick)
      return "ring-green-400 ring-8"
    else
      return ""
    // return "hover:ring-green-400 hover:ring-8"
  }

  return (
    <div className={`${computeRingSize()} rounded-md border-black border-2 w-12 h-12 cursor-pointer `}
      style={{ backgroundColor: color }}
      onClick={() => { setColorPick(color); console.log(color) }}
    >
    </div>
  )
}

export default SelectColorButton