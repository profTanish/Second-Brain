import { LuBrain } from "react-icons/lu";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { SlSocialTwitter } from "react-icons/sl";
import { sideBarValue } from "../../store/sidebarStates";
import { useAtomValue, useSetAtom } from "jotai";
import { AiOutlineYoutube } from "react-icons/ai"
import { IoLinkSharp } from "react-icons/io5";
import { HiOutlineHashtag } from "react-icons/hi";


function SideBar() {

  const sideBar = useAtomValue(sideBarValue)
  const setSideBar = useSetAtom(sideBarValue)
  const TabData = [{
    name: "Twitter",
    icon: <SlSocialTwitter className=" size-xl mt-[2px] size-6"/>,
    style:""
  },{
    name: "Videos",
    icon: <AiOutlineYoutube className=" font-bold size-6 mt-[2px]"/>,
    style: ``
  },{
    name: "Documents",
    icon: <HiOutlineDocumentText className="size-5 font-bold size-xl mt-[2px]"/>,
    style:""
  },{
    name: "Links",
    icon: <IoLinkSharp className="font-bold size-5 mt-[2px]"/>,
    style:""
  },{
    name: "Tags",
    icon: <HiOutlineHashtag className="font-bold size-5 mt-[2px]"/>,
    style:""
  }]

  return (
        <div className='parent-of-sideBar ml-1 h-screen gap-3'>
          <div className='flex First-Element pt-3 px-1 pb-4 '>
            <LuBrain className="size-10 fill-purple-600"/>            
            <div className="ml-3 pt-1 font-bold text-2xl">
              Second Brain
            </div>
          </div>
          <div className='Second-Element  px-1 text-sm'>
            {TabData.map((items, index)=> (
              <div key={index} onClick={()=> {
                setSideBar(items.name)
              }} className={`p-2 ${sideBar == items.name ? "bg-[#e2e6ea] rounded-lg": ""} ${items.style} hover:bg-[#e2e6ea] hover:rounded-lg m-2`}><div className="flex"><div className=" hover:fill-[#1da1f2] pr-4">{items.icon}</div><div className="pt-0.5 text-sm "> {items.name}</div></div> </div>
            ))}
            </div>
        </div>
  )
}

export default SideBar
