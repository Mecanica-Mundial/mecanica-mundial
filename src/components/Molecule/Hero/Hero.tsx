import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  return (
    <section>
        <div id="esquerda">
            <Image src="/name.jpg" alt="" />
            <div>
            Em injeção eletrônica, limpezas de bicos e manutenção geral em veículos leves
            </div>
            <div>
                <button>contato</button>
                <button>serviços</button>
            </div>

        </div>
        <div id="direita">
            <Image src="/carros.jpg" alt="3 carros"/>
        </div>
    </section>
  )
}
