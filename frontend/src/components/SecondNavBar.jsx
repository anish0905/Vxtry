import React from 'react'
import logo from "../assets/vxtry_logo.png"

const SecondNavBar = () => {
  return (
    <div className='flex mt-5 justify-between content-center items-center lg:px-20 px-5 font-serif '>
      <div className='flex justify-between content-center items-center gap-2 lg:text-base text-sm'>
      <div>
      <img src={logo} alt='logo'className='w-24 lg:w-40' />
      </div>
      </div>
      <div className='lg:flex justify-between content-center items-center gap-5 lg:text-xl md:text-xl font-semibold hidden'>
        <div className='text-red-600'>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Blog</div>
        <div>Shop</div>
        <div>Account</div>
      </div>
      <div>
        <button className='bg-red-600 px-2 py-2 rounded-md lg:text-base text-sm text-white'>REQUEST QUOTE</button>
      </div>
    </div>
  )
}

export default SecondNavBar
