import Image from "next/image"
import mecanica from '../../../public/images/empresa.jpg'

export default function About () {
    return (
        <>
            <section className="w-full h-full bg-whiteMundial gap-4 flex pr-6 pl-6">
                <div className="w-[60%] h-[40rem] flex flex-col items-start justify-center gap-6">
                    <div className="text-blackMundial ml-14 flex flex-col gap-4 w-4/6 font-medium text-4xl">
                        <p>A EMPRESA</p>
                    </div>
                    <div className="text-blackMundial ml-14 flex flex-col gap-4 w-11/12 font-normal text-xl">     
                        <p className="w-full">Bem-vindo à nossa oficina com uma história de mais de 30 anos!</p>

                        <p>Fundada em 1987 pelo Toninho, um apaixonado por
                        automóveis que veio de São Paulo aos 14 anos e
                        encontrou em Pouso Alegre sua vida profissional e seu lar. Desde então, 
                        estamos comprometidos em 
                        oferecer serviços de alta qualidade para nossos clientes.</p>
                        
                        <p>Nosso ambiente é familiar e acolhedor, transmitindo 
                        a dedicação e o carinho que permeiam nossa 
                        trajetória. Localizada nesta mesma região desde
                        1990, somos referência na cidade quando se 
                        trata de cuidar dos veículos dos nossos clientes.</p>
                        
                        <p>Administramos nossa oficina com muito orgulho e
                        dedicação, contando com uma equipe de mecânicos
                        capacitados e responsáveis, que se dedicam em
                        fornecer um serviço excepcional. Valorizamos a 
                        confiança e a satisfação dos nossos clientes, buscando sempre superar suas expectativas.</p>
                    </div>   
                </div>
                <div className=" w-[40%] h-[40rem] flex items-center justify-center">
                <Image className="rounded-2xl" src={mecanica} alt="Foto da faixada da oficina" aria-label="Foto da oficina"></Image>
                </div>
            </section>
        </>
    )
}