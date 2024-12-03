import React from 'react'
import {
  LogOut,
  UserRoundCheck,
  UserRoundCog,
  UserRoundX,
  UsersRound
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SideBar = ({ onLinkClick }) => {
  const data = [
    {
      title: 'All Employees',
      icon: <UsersRound size={20} className='text-sky-500' />,
      link: '/'
    },
    {
      title: 'On Probation',
      icon: <UserRoundCog size={20} className='text-orange-500' />,
      link: '/importantTasks'
    },
    {
      title: 'Active',
      icon: <UserRoundCheck size={20} className='text-green-500' />,
      link: '/completedTasks'
    },
    {
      title: 'On Leave',
      icon: <UserRoundX size={20} className='text-red-500' />,
      link: '/incompletedTasks'
    }
  ]

  return (
    <div className='flex flex-col items-stretch justify-between h-full'>
      {/* Sidebar Heading */}
      <div className='text-start'>
        <h2 className='text-2xl'>Management Panel</h2>
        <h4 className='text-sm text-white/40 tracking-wide'>
          <span>Employees Data and Status</span>
        </h4>
      </div>

      {/* Navigation Links */}
      <div className='pb-16'>
        {data.map((items, i) => (
          <Link
            to={items.link}
            key={i}
            onClick={onLinkClick}
            className='font-light my-4 p-4 rounded-lg border border-white/10 hover:border-transparent hover:bg-white/10 cursor-pointer transition-all duration-200 ease-in-out flex items-center justify-between active:scale-95'
          >
            {items.title}
            {items.icon}
          </Link>
        ))}
      </div>

      {/* User Logout Button */}
      <div>
        <button className='bg-white/5 w-full p-4 rounded-lg hover:bg-red-800 cursor-pointer transition-all duration-300 ease-in-out active:scale-95 flex items-center justify-center gap-3'>
          <span>Log Out</span>
          <LogOut size={16} />
        </button>
      </div>
    </div>
  )
}

export default SideBar
