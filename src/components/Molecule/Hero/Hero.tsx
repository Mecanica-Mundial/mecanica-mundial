import Image from 'next/image'
import React from 'react'
import HeroCar from '../../../../public/images/heroCar.png'
import Scroll from '../../../../public/images/scroll.png'


export default function Hero() {
  return (
    <>
    <section className='bg-blackMundial h-[90vh] w-full pr-16 pl-16 pt-6 flex flex-col items-center justify-end'>
      <div className='w-full relative h-[27rem]'>
        <div className='flex flex-col w-full gap-4 items-start justify-center'>
          <h1 className='font-wall uppercase text-7xl w-80 text-primary'>Centro Especializado</h1>
          <p className='w-80'>Em injeção eletrônica, limpezas de bicos e manutenção geral em veículos leves</p>
          <div className='flex w-full gap-6 items-center justify-start'>
            <button>CONTATO</button>
            <button>SERVIÇOS</button>
          </div>
        </div>
        <Image className='absolute right-0 top-0' src={HeroCar} alt='Carros' aria-label='Carros' width={760} height={360}/>
    </div>
    <div className='w-full h-14 flex flex-col items-center justify-start gap-2'>
      <p className='text-primary text-xs font-bold'>Role para baixo</p>
      <Image className='animate-bounce' src={Scroll} alt='Scroll Down' aria-label='Scroll Down' width={20} height={20}/>
    </div>
    </section>
    </>
  )
}
