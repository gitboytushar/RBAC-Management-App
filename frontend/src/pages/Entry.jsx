import React from 'react'
import SignUp from './SignUp'

const Entry = () => {
  return (
    <div className='flex h-[98vh] overflow-hidden'>
      <div className='w-full p-4 border border-white/20 text-white/20 text-xl lg:text-[70px] font-bold rounded-lg flex items-center justify-center flex-wrap'>
        <SignUp />
      </div>
    </div>
  )
}

export default Entry
