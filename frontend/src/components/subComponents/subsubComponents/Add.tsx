interface add{
    size: number,
    style?: string
  }
  
  export default function Add(prop: add ) {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={` ${prop.style} size-${prop.size ? prop.size : "5"}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
  
  }
  