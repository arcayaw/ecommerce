import React from 'react'
import { BsInstagram, BsWhatsapp, BsEnvelope } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='bottom-0 left-0 w-screen h-20 mt-24 absolut bg-secondary-dark-bg'>
      <h1 className='pt-2 text-center'>@Copyright 2022 NunchiBox </h1>
      <div className='flex justify-center my-3 text-2xl text-center text-white align-middle'>

        <a href="https://www.instagram.com/nunchibox_ar/?hl=es" target="_blank">
          <BsInstagram className='mx-5 tex' />
        </a>
        <a href="https://web.whatsapp.com/" target="_blank">
          <BsWhatsapp className='mx-5' />
        </a>
        <a href="mailto:info.nunchibox@gmail.com" target="_blank">
          <BsEnvelope className='mx-5' />
        </a>

      </div>
    </div >
  )
}

export default Footer