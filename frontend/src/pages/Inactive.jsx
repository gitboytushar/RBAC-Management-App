import Cards from '@/components/Home/Cards'
import React from 'react'

const Inactive = () => {
  return (
    <div>
      <Cards home={'false'} filterStatus='Inactive' />
    </div>
  )
}

export default Inactive
