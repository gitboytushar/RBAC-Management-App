import React, { useState, useRef } from 'react'
import SideBar from '../components/Home/SideBar'
import { Outlet } from 'react-router-dom'
import { CircleChevronRight } from 'lucide-react'

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const cardsContainerRef = useRef(null)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  const handleSidebarLinkClick = () => {
    setSidebarOpen(false)
    cardsContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to top
  }

  const handleOutsideClick = () => {
    if (isSidebarOpen && window.innerWidth < 1024) {
      setSidebarOpen(false)
    }
  }

  return (
    <>
      <div className='relative flex h-[98vh] gap-2 overflow-hidden'>
        {/* Sidebar */}
        <div
          className={`absolute lg:relative z-20 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 w-full md:w-1/3 min-h-fit lg:w-1/6 p-4 border border-white/20 backdrop-blur-xl rounded-lg font-light flex flex-col justify-between transition-transform duration-200 ease-in-out`}
        >
          <SideBar onLinkClick={handleSidebarLinkClick} />
        </div>

        {/* Sidebar Toggle Button (Visible on small devices) */}
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className='absolute z-30 lg:hidden top-11 -left-7 bg-white rounded-r-full py-1 pl-10 pr-1'
          >
            <CircleChevronRight size={25} color='#000' />
          </button>
        )}

        {/* Cards Content */}
        <div
          className={`flex-1 border border-white/20 rounded-lg p-4 transition-opacity duration-300 ease-linear ${
            isSidebarOpen ? 'opacity-30' : 'opacity-100'
          } overflow-y-scroll hide-the-scrollbar`}
          ref={cardsContainerRef}
          onClick={handleOutsideClick}
        >
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Home
