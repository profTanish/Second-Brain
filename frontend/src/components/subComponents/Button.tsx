import Add from "./subsubComponents/Add"
import Button from "./subsubComponents/ButtonMain"
import Share from "./subsubComponents/Share"


export default function Buttons() {
  return (
    <div className='flex gap-2 '>
      <Button text="Share Brain" startIcon={<Share size={5} style=" mr-2"/>} varient='Light'/>
      <Button text="Add Content" startIcon={<Add size={5} style=" mr-2"/>} varient='Dark'/>
    </div>
  )
}
