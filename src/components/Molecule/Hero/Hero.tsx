"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion';


  theme: {
    extend: {
      fontFamily: {
        'outfit'; ['Outfit', 'sans-serif' ]
        'wallpoet'; ['Wallpoet']
      }
    }
  }
 export default function Hero() {
  return (
    
<div className='flex flex-col w-full h-screen bg-zinc-800	'>
  <div className='flex '>
    <div id='esquerda' className='flex-1 w-70 absolute top-1/2 left-0 transform -translate-y-1/2 ml-14 mt-14	'>
      <h1 id='h1' className="text-6xl font-wallpoet font-bold mb-4" style={{ fontFamily: "Wallpoet, cursive", color: "#05b0f0" }}>CENTRO ESPECIALIZADO</h1>
      <p id='p' className="text-lg mb-6">Em injeção eletrônica, limpezas de bicos e manutenção geral em veículos leves</p>
      <div id='button' className="flex flex-wrap items-end mb-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">Contato</button>
        <button className="bg-white hover:bg-white-600 text-black font-bold py-2 px-4 rounded">Serviços</button>
      </div>
    </div>
    <div id='direita' className="flex-1 w-40 relative pt-20 mr-9 mt-36		">
      <Image src="/images/carross.png" width={800} height={600} alt="3 carros" className='absolute top-1/2 right-0 transform translate-y-1/2' />
    </div>
  </div>
  <div id='span' className='flex flex-col bottom-full items-center absolute inset-x-0 bottom-0 h-16'>
    <span className='bottom-full inset-x-0 bottom-0 h-16 text-center'>
      Role para baixo
    </span>
    <Image id='seta' src="/images/seta.png" width={30} height={20} alt='seta para baixo' className="max-w-full" />
  </div>
</div>
   );
};

