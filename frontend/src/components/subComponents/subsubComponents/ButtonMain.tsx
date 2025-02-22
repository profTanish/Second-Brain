import { ReactElement } from "react"

const defaultStyles = "flex p-2 rounded-lg text-sm px-4"


interface ButtonVar{
    text?: string,
    startIcon?: ReactElement,
    varient?: "Dark" | "Light"
}


export default function Button(prop: ButtonVar) {
  return (
    <div className='flex '>
        <button className={` ${defaultStyles} ${prop.varient === "Dark" ? "bg-purple-600 text-[#ffffff]" : "bg-purple-200 text-[#4343d8]"} `}>{prop.startIcon}{prop.text}</button>
    </div>
  )
}
