import Image from "next/image"
import Link from "next/link"
import mecanica from '/images/C. Automotivo Mundial2.jpg'

export default function About () {
    return (
        <>
            <section className="w-full h-full bg-whiteMundial flex pr-6 pl-6">
                <div className="w-[850px] h-[52rem]">
                    <div className="text-blackMundial text-5xl font-medium ml-40 mt-20 break-all flex flex-col gap-4 w-4/6 font-medium text-xl">
                        <p>A EMPRESA</p>
                    </div>
                    <div className="text-blackMundial text-xl ml-40 mt-10 break-all flex flex-col gap-4 w-4/6 font-normal text-xl">     
                        <p>Bem-vindo à nossa oficina com uma história de mais<br/> de 30 anos!</p>

                        <p>Fundada em 1987 pelo Toninho, um apaixonado por <br/>
                        automóveis que veio de São Paulo aos 14 anos e<br/>
                         encontrou em Pouso Alegre sua vida profissional e <br/>seu lar. Desde então, 
                        estamos comprometidos em <br/>
                        oferecer serviços de alta qualidade para nossos clientes.</p>
                        
                        <p>Nosso ambiente é familiar e acolhedor, transmitindo <br/>
                        a dedicação e o carinho que permeiam nossa <br/>
                        trajetória. Localizada nesta mesma região desde<br/>
                         1990, somos referência na cidade quando se <br/>
                         trata de cuidar dos veículos dos nossos clientes.</p>
                        
                        <p>Administramos nossa oficina com muito orgulho e<br/>
                         dedicação, contando com uma equipe de mecânicos<br/>
                          capacitados e responsáveis, que se dedicam em<br/>
                           fornecer um serviço excepcional. Valorizamos a <br/>
                        confiança e a satisfação dos nossos clientes, <br/>buscando sempre superar suas expectativas.</p>
                    </div>   
                </div>
                <div className=" w-[40%] h-[30rem] mt-40 ml-20">
                <img src={"/images/fotoOficina.png"} alt="Foto da faixada da oficina" aria-label="Foto da oficina"></img>
                </div>
            </section>
        </>
    )
}