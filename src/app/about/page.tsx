import Image from "next/image"
import mecanica from '../../../public/images/empresa.jpg'

export default function About () {
    return (
        <section className="w-full h-full bg-whiteMundial justify-between gap-4 flex flex-col py-12 px-24 l-12:px-12">
            <div className="text-blackMundial flex flex-col gap-4 w-4/6 font-medium text-4xl">
                <p className="whitespace-nowrap">A EMPRESA</p>
            </div>
            <div className="flex w-full gap-12 max-sm:gap-4 l-12:flex-col-reverse">
                <div className="w-[58%] l-12:w-full flex flex-col items-start justify-start gap-6">
                    <div className="text-blackMundial flex flex-col gap-4 w-11/12 font-normal text-xl max-sm:text-base">     
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

                        <p>Missão: Nossa missão é oferecer serviços personalizados aos nossos clientes com qualidade, agilidade e profissionais capacitados para cuidar dos mínimos detalhes do seu veículo. Nossa satisfação é garantir o melhor produto e serviço com o menor preço e as melhores condições do mercado. </p>
                        <p>Visão: Ser reconhecida no mercado como sinônimo de superação e inovação, acreditando sempre em novas tecnologias e no ser humano como principais forças de trabalho. </p>
                        <p>Transparência: ser claro e preciso na comunicação e em sua conduta organizacional </p>
                        <p>Respeito: através das atitudes concretas, valorizando o ser humano de forma moral e ética</p>
                        <p>Comprometimento: conscientização na atuação de cada um com o compromisso da qualidade superior.</p>
                        <p>Responsabilidade ambiental: através da reciclagem no descarte de materiais, dentre outras atitudes, contribuímos para a preservação do nosso planeta.</p>
                    </div>   
                </div>
                <div className="w-[40%] l-12:w-full flex items-start justify-start">
                    <Image className="rounded-2xl" src={mecanica} alt="Foto da faixada da oficina" aria-label="Foto da oficina"></Image>
                </div>
            </div>
        </section>
    )
}