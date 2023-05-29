import React from 'react'
import { NavLink } from 'react-router-dom'

const Carbon = () => {
  return (
    <section className="carbon mb-10">
    <div className="w-[55%] pt-24 pl-8 text-WHITE ">
      <h2 className='font-bold text-lg mb-5'>Commiting To Carbon Negative</h2>
      <p className='font-light text-sm mb-5'>
        Microsoft will be carbon negative by 2030 and by 2050 we will remove
        all carbon the company has emitted since it was founded in 1975
      </p>
      <NavLink to="/" className="px-8 py-4 bg-WHITE text-BLACK font-bold">Learn More</NavLink>
    </div>
  </section>
  )
}

export default Carbon
