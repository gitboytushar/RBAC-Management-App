import React, { useState } from 'react'
import Cards from '../components/Home/Cards'
import { UserRoundPlus } from 'lucide-react'
import InputData from '@/components/Home/InputData'

const AllEmployees = () => {
  const [InputDiv, setInputDiv] = useState('hidden')

  return (
    <>
      <div>
        {/* cta btn - add new employee */}
        <div className='w-full flex justify-center md:justify-end px-3 my-3'>
          <button
            onClick={() => setInputDiv('fixed')}
            className='py-2 px-4 w-full md:w-fit rounded-lg border border-white/50 bg-white/10 hover:border-transparent active:scale-95 transition-colors duration-300 ease-linear flex items-center justify-center gap-2'
          >
            <span className='text-md font-light'>Add New</span>
            <UserRoundPlus size={18} />
          </button>
        </div>

        {/* saved cards */}
        <Cards home={'true'} setInputDiv={setInputDiv} />
      </div>

      {/* Popup Data Card for new entry */}
      <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} />
    </>
  )
}

export default AllEmployees
