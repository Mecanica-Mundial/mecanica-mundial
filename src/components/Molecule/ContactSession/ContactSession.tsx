import Image from "next/image"
import location from '../../../../public/images/location.png'
import phone from '../../../../public/images/phone.png'
import email from '../../../../public/images/email.png'
import whats from '../../../../public/images/whats.png'

export default function ContactSession() {
  return (
    <>
      <section className="h-[36.5rem] w-full bg-primary p-6 flex items-center justify-center">
        <div className="w-3/4 h-full flex flex-col gap-6">
          <h1 className="text-4xl font-medium cursor-default">LOCALIZAÇÃO E CONTATOS</h1>
          <div className="w-[35rem] h-64 bg-stone-500 rounded-2xl flex items-center justify-center">
            <h1>AQUI VAI O MAPA</h1>
          </div>
          <div className="w-[35rem] h-[15rem] flex flex-col items-star justify-center gap-6">
            <div className="flex items-center justify-start gap-4">
              <Image src={location} width={24} alt="Localização" aria-label="Localização"/>
              <span>Rua Dr. Tuany Toledo Júnior, 20, Nova Pouso Alegre, 
                    CEP 37553-476, Pouso Alegre, MG</span>
            </div>
            <div className="flex items-center justify-start gap-4">
              <Image src={phone} width={24} alt="Localização" aria-label="Localização"/>
              <span>(35) 3422-1540 (Mecânica) | (35) 3025-0291 (Auto Peças)</span>
            </div>
            <div className="flex items-center justify-start gap-4">
              <Image src={email} width={24} alt="Localização" aria-label="Localização"/>
              <span>mecmundial@bol.com.br</span>
            </div>
            <div className="flex items-center justify-start gap-4">
              <Image src={whats} width={24} alt="Localização" aria-label="Localização"/>
              <span>(35) 99105-4663 (Whatsapp)</span>
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-slate-400 h-full">
          {/* <Image></Image> */}
          <h1>testes</h1>
        </div>
      </section>
    </>
  )
}
