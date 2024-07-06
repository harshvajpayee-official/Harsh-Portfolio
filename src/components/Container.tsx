import React from 'react'

function Container({children}:any) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6'>
    {children}
  </div>
  )
}

export default Container
