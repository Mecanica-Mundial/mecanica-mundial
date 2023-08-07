import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  return (
      <section id='section'>
        <div id='esquerda'>
      <h1 id='h1' className="text-4xl font-bold mb-4">CENTRO ESPECIALIZADO</h1>
      <p id='p' className="text-lg mb-6">Em injeção eletrônica, limpezas de bicos e manutenção geral em veículos leves</p>
      <div id='button' className="flex flex-wrap items-end mb-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">Contato</button>
        <button className="bg-white hover:bg-white-600 text-black font-bold py-2 px-4 rounded">Serviços</button>
      </div>
      <div id='direita' >
        <Image src="/images/carross.png" width={400} height={600} alt="3 carros" className="max-w-full " />
      </div>
      <div id='span'>
        <span>
        Role para baixo
        </span>
        <Image id='seta' src="/images/seta.png" width={50} height={30} alt='seta para baixo' className="max-w-full" />
        </div>
    
    </div>
    </section>
   );
};

