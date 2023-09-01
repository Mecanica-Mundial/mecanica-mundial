import Image from 'next/image'
import React from 'react'
import HeroCar from '../../../../public/images/heroCar.png'
import Scroll from '../../../../public/images/scroll.png'

export default function Hero() {
  return (
    <section className='bg-blackMundial sm:h-[90vh] w-full px-4 sm:pl-20 pt-6 sm:pt-6 flex flex-col items-center sm:justify-end'>
        <div className='w-full relative h-[27rem]'>
            <div className='flex flex-col w-full gap-6 items-start justify-center'>
                <h1 className='font-wall font-bold uppercase text-4xl sm:text-8xl w-80 text-primary'>Centro Especializado</h1>
                <p className='sm:w-[25rem] text-lg'>Em injeção eletrônica, limpezas de bicos e manutenção geral em veículos leves</p>
                <div className='flex w-full gap-6 items-center justify-start'>
                    <button className='w-28 h-10 shadow-button font-bold bg-primary text-whiteMundial rounded-xl'>CONTATO</button>
                    <button className='w-28 h-10 shadow-button font-bold bg-whiteMundial text-blackMundial rounded-xl'>SERVIÇOS</button>
                </div>
            </div>
            <Image className='absolute right-0 bottom-6' src={HeroCar} alt='Carros' aria-label='Carros' width={840} height={360}/>
        </div>
    <div className='w-full h-14 flex flex-col items-center justify-start gap-2'>
        <p className='text-primary text-xs font-bold'>Role para baixo</p>
        <Image className='animate-bounce' src={Scroll} alt='Scroll Down' aria-label='Scroll Down' width={20} height={20}/>
    </div>
    </section>
  )
}
