import React from 'react'

function Skillbtn({img,text}:any) {
  return (
    <div className='bg-white flex gap-2 items-center flex-row text-black shadow-md p-3 w-[180px] rounded-md'>
       <img src={img} alt="" height={30} width={30} />
       
      <div>{text}</div>
    </div>
  )
}

export default Skillbtn
