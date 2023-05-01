import Image from 'next/image'
import React, { useState, useRef } from 'react'
import wspImage from '../public/wsp.svg'



export const WhatsappButton = () => {
  const mensaje = '¡Hola Marlene! Quisiera consultarte:'.split(' ').join('%20')
  const wspLink = 'https://wa.me/+5493435019456?text='+mensaje
  const [clase, setclase] = useState('tracking-in-contract-bck-bottom')
  
  const setearClaseHover = () => {
    console.log('hover')
    setclase('tracking-in-contract-bck-bottom')

  }
  const setearClaseBlur = () => {
    console.log('blur')
    setclase('text-blur-out')

  }

  return (
    <div className='flotante-derecha'>
      <a href={wspLink} target="_blank">
        <button 
          className='wsp bounce-left'
          onMouseOver={setearClaseHover}
          onMouseLeave={()=>setclase('text-blur-out')}
        >
          <Image src={wspImage} alt='Whatsapp' width={0} height={50} />
        </button>
      </a>
    </div>
  )
}
