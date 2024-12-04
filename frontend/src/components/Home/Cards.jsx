import { Trash, UserRoundPen, UserRoundPlus } from 'lucide-react'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

const Cards = ({ home, setInputDiv, filterStatus }) => {
  const employees = [
    {
      id: 1,
      name: 'Aarav Kapoor',
      role: 'Backend Developer',
      department: 'Development',
      status: 'Inactive',
      email: 'aarav.kapoor@gmail.com'
    },
    {
      id: 2,
      name: 'Simran Gupta',
      role: 'HR Manager',
      department: 'Human Resources',
      status: 'Active',
      email: 'simran.gupta@yahoo.com'
    },
    {
      id: 3,
      name: 'Kabir Malhotra',
      role: 'Product Designer',
      department: 'Design',
      status: 'Inactive',
      email: 'kabir.malhotra@outlook.com'
    },
    {
      id: 4,
      name: 'Riya Patel',
      role: 'Marketing Specialist',
      department: 'Marketing',
      status: 'Active',
      email: 'riya.patel@hotmail.com'
    },
    {
      id: 5,
      name: 'Tushar Verma',
      role: 'Frontend Developer',
      department: 'Development',
      status: 'Active',
      email: 'tusharwork.001@gmail.com'
    },
    {
      id: 6,
      name: 'Vikram Ahuja',
      role: 'DevOps Engineer',
      department: 'Infrastructure',
      status: 'Inactive',
      email: 'vikram.ahuja@gmail.com'
    },
    {
      id: 7,
      name: 'Dinesh Kaushik',
      role: 'Quality Assurance Engineer',
      department: 'Testing',
      status: 'Active',
      email: 'dinesh.kaushik@gmail.com'
    }
  ]

  // Filter employees based on filterStatus prop
  const filteredEmployees = filterStatus
    ? employees.filter(emp => emp.status === filterStatus)
    : employees

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5 p-3'>
      {filteredEmployees &&
        filteredEmployees.map(items => (
          <div
            key={items.id}
            className='border bg-white/5 border-white/10 p-5 rounded-md font-light flex flex-col items-stretch justify-evenly min-h-[270px]'
          >
            {/* data presentation */}
            <div>
              <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-0'>
                <h3 className='text-white/90 font-medium text-md'>
                  {items.name}
                </h3>

                {/* cta btn - user can click to change status, shadcn/ui Tooltip to show on hover */}
                <TooltipProvider>
                  <Tooltip delayDuration={300} skipDelayDuration={300}>
                    <TooltipTrigger asChild>
                      <button
                        className={`text-white font-medium text-sm md:text-xs px-3 py-0.5 rounded-md active:scale-90 transition-all duration-200 ease-linear ${
                          items.status === 'Active'
                            ? 'bg-green-900'
                            : items.status === 'Inactive'
                            ? 'bg-red-900'
                            : 'bg-white/20'
                        }`}
                      >
                        {items.status}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Change state</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <hr className='my-4 rounded-full opacity-10' />

              <p className='text-center md:text-start text-white/80 '>
                {items.role}
              </p>
              <p className='text-center md:text-start text-white/60 mt-1 overflow-x-auto whitespace-nowrap hide-the-scrollbar'>
                {items.email}
              </p>

              <hr className='my-4 rounded-full opacity-10' />

              <p className='mt-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 gap-y-0 text-sm'>
                <span className='text-white/80'>{items.department}</span>
                <span className='text-white/50'>Department</span>
              </p>
            </div>

            <hr className='my-4 rounded-full opacity-0' />

            {/* edit data buttons */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-3'>
              <button className='py-2 px-3 w-full md:w-1/2 rounded-lg border border-white/10 bg-transparent hover:border-transparent hover:bg-white/5 active:scale-95 transition-all duration-100 ease-in-out flex items-center justify-center gap-3 text-white/50 hover:text-white'>
                <span className='text-sm'>Delete</span>
                <Trash size={14} />
              </button>
              <button className='py-2 px-5 w-full md:w-1/2 rounded-lg border border-white/10 bg-transparent hover:border-transparent hover:bg-white/5 active:scale-95 transition-all duration-100 ease-in-out flex items-center justify-center gap-3'>
                <span className='text-sm'>Edit</span>
                <UserRoundPen size={14} />
              </button>
            </div>
          </div>
        ))}

      {/* add new data - second button positioned at the end of cards array */}
      {home === 'true' && (
        <button
          onClick={() => setInputDiv('fixed')}
          className='border bg-white/5 border-white/10 active:scale-95 transition-all duration-200 ease-linear p-5 rounded-md font-light flex items-center justify-center min-h-[270px]'
        >
          <div className='text-white/30 flex flex-col-reverse items-center justify-center gap-2 w-fit p-2'>
            <span className='text-xl'>Add New</span>
            <span>
              <UserRoundPlus size={35} color='#fff' className='opacity-30' />
            </span>
          </div>
        </button>
      )}
    </div>
  )
}

export default Cards
