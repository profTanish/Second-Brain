import SideBar from "./subComponents/SideBar"
import Card from "./subComponents/Card"

export default function Home() {
  return (
    <div className="grid grid-cols-12 bg-[#f7f9fb]">
        <div className="col-span-2 shadow-sm bg-[#ffff]">
            <SideBar  />
        </div>
        <div className="col-span-10">
            <Card/>
        </div>
    </div>
  )
}
