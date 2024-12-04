import React from 'react'
import Cards from '../components/Home/Cards'
import { UserRoundPlus } from 'lucide-react'
import InputData from '@/components/Home/InputData'

const AllEmployees = () => {
  return (
    <>
      <div>
        {/* cta btn - add new employee */}
        <div className='w-full flex justify-center md:justify-end px-3 my-3'>
          <button className='py-2 px-4 w-full md:w-fit rounded-lg border border-white/50 bg-white/10 hover:border-transparent active:scale-95 transition-colors duration-300 ease-linear flex items-center justify-center gap-2'>
            <span className='text-md font-light'>Add New</span>
            <UserRoundPlus size={18} />
          </button>
        </div>

        {/* saved cards */}
        <Cards home={'true'} />
      </div>

      <InputData />
    </>
  )
}

export default AllEmployees
