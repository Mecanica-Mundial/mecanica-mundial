import Image from "next/image"
import location from '../../../../public/images/location.png'
import phone from '../../../../public/images/phone.png'
import email from '../../../../public/images/email.png'
import whats from '../../../../public/images/whats.png'
import people from '../../../../public/images/woman.png'

export default function ContactSession() {
    return (
        <section id="contact" className="h-[36.5rem] w-full bg-primary px-6 pt-8 flex flex-col sm:flex-row items-center justify-center text-white" >
            <div className="w-full sm:w-[63%] h-full flex flex-col gap-6 pr-4 pl-4 pt-4">
                <h1 className="text-4xl font-medium cursor-default">LOCALIZAÇÃO E CONTATOS</h1>
                <div className="w-full sm:w-[35rem] h-96 flex items-center justify-center">
                    <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.373306580666!2d-45.92797288905624!3d-22.225910613808136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cbc7beffef8c4d%3A0xb50b9d88473c7e96!2sR.%20Dr.%20Tuany%20Toledo%20J%C3%BAnior%2C%2020%20-%20Nova%20Pouso%20Alegre%2C%20Pouso%20Alegre%20-%20MG%2C%2037553-476!5e0!3m2!1sen!2sbr!4v1692024505665!5m2!1sen!2sbr" loading="lazy"></iframe>
                </div>
            <div className="w-full sm:w-[35rem] h-[17rem] flex flex-col items-star justify-center gap-4 pb-8">
                <div className="flex items-start justify-start gap-4">
                    <Image src={location} width={24} alt="Localização" aria-label="Localização"/>
                    <span>
                        Rua Dr. Tuany Toledo Júnior, 20, Nova Pouso Alegre, 
                        CEP 37553-476, Pouso Alegre, MG
                    </span>
                </div>
                <div className="flex items-start justify-start gap-4">
                    <Image src={phone} width={24} alt="Localização" aria-label="Localização"/>
                    <span>(35) 3422-1540 (Mecânica) | (35) 3025-0291 (Auto Peças)</span>
                </div>
                <div className="flex items-start justify-start gap-4">
                    <Image src={email} width={24} alt="Localização" aria-label="Localização"/>
                    <span>mecmundial@bol.com.br</span>
                </div>
                <div className="flex items-start justify-start gap-4">
                    <Image src={whats} width={24} alt="Localização" aria-label="Localização"/>
                    <span>(35) 99105-4663 (Whatsapp)</span>
                </div>
            </div>
            </div>
            <div className="w-[38%] h-full relative hidden sm:block">
                <Image className="absolute bottom-0 left-4" src={people} width={200} alt="woman" aria-label="woman"></Image>
            </div>
        </section>
    )
}
