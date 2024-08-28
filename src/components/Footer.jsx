import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='bg-[#140C1C] py-10'>
        <div className='flex flex-col items-center justify-center gap-6'>
            <div>
                <img width={120} src={logo} alt="logo" />
            </div>
            <div className='space-y-4 p-4 md:p-0'>
                <p className='text-purple-600'>© 2024 All Rights Reserved by Perwez Alam</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
