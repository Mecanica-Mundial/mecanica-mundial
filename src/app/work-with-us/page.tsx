import Image from "next/image";
import Link from "next/link";

export default function WorkWithUs () {

    return (
        <div className="px-32 l-11:px-16 max-sm:px-8 py-16 bg-whiteMundial max-sm:py-8 relative">
            <h1 className="text-4xl max-sm:text-3xl uppercase font-medium text-blackMundial">
                Trabalhe conosco
            </h1>

            <div className="flex flex-col gap-4 w-4/6 max-sm:w-full mt-8 font-medium text-xl text-blackMundial max-sm:text-base">
                <p>
                    Estamos sempre em busca de talentos apaixonados por automóveis e comprometidos em oferecer serviços de qualidade.
                </p>
                <p>
                    Se você é um profissional dedicado, que valoriza o trabalho em equipe, o aprendizado contínuo e a excelência no atendimento ao cliente, você está no lugar certo. 
                </p>   
                <p>
                    Aqui, oferecemos um ambiente acolhedor, oportunidades de crescimento e desenvolvimento profissional. 
                </p>
                <p>
                    Junte-se a nós e faça parte de uma equipe que ama o que faz e se esforça para superar expectativas. 
                </p>
                <p className="font-bold text-blackMundial">
                    ENVIE SEU CURRÍCULO E VAMOS JUNTOS CONSTRUIR UM FUTURO AUTOMOTIVO DE SUCESSO!
                </p>
            </div>

            <Link
                href={"https://wa.me/5535991054663"}
                target="_blank"
                className="inline-block bg-blue-500 py-2 px-8 mt-8 rounded-lg font-semibold text-white"
            >
                ENVIAR CURRÍCULO
            </Link>
            
            <Image 
                className="max-sm:hidden w-96 l-11:w-80 absolute bottom-0 right-32 l-11:right-10 l-12:right-4"
                src={"/images/work-with-us-image.png"}
                alt=""
                width={464}
                height={521}
            />
        </div>
    )
}