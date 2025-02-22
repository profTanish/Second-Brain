import Buttons from './subComponents/Button'

export default function NavBar() {
  return (
    <div className='pt-7 px-5 col-span-6 bg-[#f7f9fb]'>
      <div className='flex mx-5 '>
        <div className='w-1/2 font-bold pt-0.5 text-3xl'>
          All Notes
        </div>
        <div className='w-1/2 '>
          <div className='float-end'>
            <Buttons/>
          </div>
        </div>
      </div>
    </div>
  )
}
