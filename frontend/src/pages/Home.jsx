import React from 'react'
import SideBar from '../components/Home/SideBar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='flex h-[98vh] gap-2'>
        {/* sidebar content */}
        <div className='border border-white/20 rounded-md w-1/6 p-4 font-light flex flex-col justify-between'>
          <SideBar />
        </div>

        {/* tasks cards are shown on right side section of the homepage  */}
        <div className='border border-white/20 rounded-md w-5/6 p-4'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Home
