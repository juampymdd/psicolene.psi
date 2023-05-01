import Image from 'next/image'
import { WhatsappButton } from '@psicolene/components/WhatsappButton'
import { CardSlider } from '@psicolene/components/CardSlider'
import { InstagramButton } from '@psicolene/components/InstagramButton'

export default function Home() {
  return (
    <div>
      
        {/* <Image src="wave.svg" alt="wave" width={0} height={200}/> */}
      <main className='container'>
        <div className='logo'>
          <h1 className='text-pop-up-top'>Psicolene.psi</h1>
          <h3 className='tracking-in-contract-bck-bottom'>tu terapia online</h3>
        </div>
          <Image src="ilustracion.svg" alt="video call" className='slide-in-bck-center ilustracion-principal' width={200} height={200}/>
          
      </main>
      <CardSlider/>
      <WhatsappButton/>
      <InstagramButton/>
    </div>
  )
}
