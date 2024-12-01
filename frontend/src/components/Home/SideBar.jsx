import React from 'react'
import {
  CircleCheckBig,
  Copyright,
  Info,
  List,
  LogOut,
  Star
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const data = [
    { title: 'All tasks', icon: <List size={18} />, link: '/' },
    {
      title: 'Important tasks',
      icon: <Star size={18} />,
      link: '/importantTasks'
    },
    {
      title: 'Completed tasks',
      icon: <CircleCheckBig size={18} />,
      link: '/completedTasks'
    },
    {
      title: 'Incompleted tasks',
      icon: <Info size={18} />,
      link: '/incompletedTasks'
    }
  ]

  return (
    <>
      {/* sidebar heading */}
      <div>
        <h2 className='text-xl'>Task Management App</h2>
        <h4 className='w-full text-sm text-white/30 tracking-wide flex items-center justify-start gap-1'>
          <span>
            <Copyright size={13} />
          </span>
          <span>developer Tushar Verma</span>
        </h4>
      </div>

      {/* data items */}
      <div>
        {data.map((items, i) => (
          <Link
            to={items.link}
            key={i}
            className='my-4 p-4 rounded-lg border border-white/10 hover:border-transparent hover:bg-white/10 cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-between'
          >
            {items.title}
            {items.icon}
          </Link>
        ))}
      </div>

      {/* user log out btn */}
      <div>
        <button className='bg-white/10 w-full py-2 px-4 rounded-lg hover:bg-red-900 cursor-pointer transition-all duration-200 ease-in-out flex items-center justify-center gap-3'>
          <span>Log Out</span>
          <LogOut size={16} />
        </button>
      </div>
    </>
  )
}

export default SideBar
