import Image from "next/image";
import Link from "next/link";

export default function WorkWithUs () {

    return (
        <div className="px-32 py-16 relative">
            <h1 className="text-4xl uppercase font-medium">
                Trabalhe conosco
            </h1>

            <div className="flex flex-col gap-4 w-4/6 mt-8 font-medium text-xl">
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
                <p className="font-bold">
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
                className="w-96 absolute bottom-0 right-32"
                src={"/images/work-with-us-image.png"}
                alt=""
                width={464}
                height={521}
            />
        </div>
    )
}