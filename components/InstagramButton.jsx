import Image from 'next/image'
import React, { useState } from 'react'
import instagram from '../public/instagram.svg'



export const InstagramButton = () => {
  const wspLink = 'https://www.instagram.com/psicolene.psi/'
  const [clase, setclase] = useState('tracking-in-contract-bck-bottom')
  
  return (
    <div className='flotante-izquierda'>
      <a href={wspLink} target="_blank">
        <button 
          className='instagram-gradient bounce-left'
        >
          <Image src={instagram} alt='Whatsapp' width={0} height={50} />
        </button>
      </a>
    </div>
  )
}
