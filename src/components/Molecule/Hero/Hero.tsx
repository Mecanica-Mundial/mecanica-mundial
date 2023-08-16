"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (   
<div className='flex flex-col w-full h-screen bg-zinc-800 snap-x sm:bg-zinc-800 overflow-y-scroll'>
      <div className='flex flex-col md:flex-row'>
        <div id='esquerda' className='md:flex-1 w-full md:w-70 relative md:top-1/2 md:left-0 md:transform md:-translate-y-1/2 md:ml-14 md:mt-44 flex-col'>
            <motion.h1
  id='h1'
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-3xl font-wallpoet mt-8 ml-5	 mb-4 md:text-5xl font-bold "
  style={{ color: "#05b0f0" }}>
  CENTRO ESPECIALIZADO
</motion.h1>
            <motion.p
            id='p'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base	mt-8 ml-5	 mb-4 md:text-lg mb-6">
            Em injeção eletrônica, limpezas de bicos e manutenção geral em veículos leves
          </motion.p>
          <motion.div
            id='button'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 ml-5	 md:flex flex-wrap items-end mb-8">
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
              Contato
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-white-600 text-black font-bold py-2 px-4 rounded">
              Serviços
            </motion.button>
          </motion.div>
        </div>
        <div id='direita' className="md:flex-1 w-full md:w-40 relative md:pt-20 md:mr-9 md:mt-30 sm:flex-col">
          <Image src="/images/carross.png" width={800} height={600} alt="3 carros" className='absolute top-1/2 right-0 transform translate-y-1/2' />
        </div>
  <div id='span' className='hidden md:flex flex-col bottom-full items-center absolute inset-x-0 bottom-5 h-16'>
    <span className='bottom-full inset-x-0 bottom-0 h-16 text-center'>
      Role para baixo
    </span>
    <Image id='seta' src="/images/seta.png" width={20} height={20} alt='seta para baixo' className="max-w-full" />
    </div>
  </div>
</div>
   );
};

