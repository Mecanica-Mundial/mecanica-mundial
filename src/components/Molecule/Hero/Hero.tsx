import Image from 'next/image'
import React from 'react'
import HeroCar from '../../../../public/images/heroCar.png'
import Scroll from '../../../../public/images/scroll.png'

export default function Hero() {
    return (
    <section className='bg-blackMundial h-[43rem] w-full px-24 md-10:px-28 md-11:px-32 md-12:px-36 md-13:px-44 md-14:px-52 md-15:px-60 l-10:px-14 l-11:px-11 sm-13:px-4 pt-6 flex flex-col items-center justify-center gap-6'>
        <div className='w-full relative h-[27rem] l-12:h-[35rem] sm-12:h-[30rem]'>
            <div className='flex flex-col w-full gap-6 sm-13:gap-4 l-11:gap-8 items-start justify-center'>
                <h1 className='font-wall font-bold uppercase text-8xl l-12:text-7xl w-80 sm-10:w-72 sm-12:w-full sm-10:text-6xl sm-11:text-[3.25rem] sm-12:text-[2.5rem] sm-13:text-4xl text-primary'>Centro Especializado</h1>
                <p className='w-[25rem] sm-12:w-full text-lg md-12:text-xl'>Em injeção eletrônica, limpezas de bicos e manutenção geral em veículos leves</p>
                <div className='flex w-full gap-6 items-center justify-start'>
                    <button className='w-28 md-12:w-32 md-12:text-xl md-12:h-11 sm-13:h-8 sm-13:text-base h-10 shadow-button font-bold bg-primary text-whiteMundial rounded-xl'>CONTATO</button>
                    <button className='w-28 md-12:w-32 md-12:text-xl md-12:h-11 sm-13:h-8 sm-13:text-base h-10 shadow-button font-bold bg-whiteMundial text-blackMundial rounded-xl'>SERVIÇOS</button>
                </div>
            </div>
            <Image className='absolute right-0 bottom-6 l-10:w-[50rem] l-10:right-[-24px] l-11:w-[40rem] l-11:right-[-40px] l-11:bottom-2 l-12:w-[52.5rem] l-13:w-[70rem] l-12:bottom-[-2.5rem] l-12:right-[0rem] l-13:bottom-[-1rem] sm-10:bottom-[3rem] sm-11:bottom-[5rem] sm-12:bottom-[4rem] sm-13:bottom-[7rem]' src={HeroCar} alt='Carros' aria-label='Carros' width={840} height={360}/>
        </div>
        <div className='w-full h-14 flex flex-col items-center justify-end gap-2 md-12:gap-3'>
            <p className='text-primary text-xs font-bold md-12:text-sm'>Role para baixo</p>
            <Image className='animate-bounce md-12:w-6 md-12:h-6' src={Scroll} alt='Scroll Down' aria-label='Scroll Down' width={20} height={20}/>
        </div>
    </section>
    )
}
