import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center flex-col gap-4 w-full bg-zinc-700 p-8 relative" >
      <div className="bg-amber-300 h-1 w-3/4 absolute top-4 left-0"/>
      <div className="flex justify-between items-center w-2/3 py-12">
        <Image 
          width={420}
          height={420}
          src={"/images/Logo_transparent.png"}
          alt=""
          className="w-36 h-36"
        />

        <nav className="flex flex-col gap-4 text-white">
          <Link href="/" > HOME </Link>
          <Link href="/about" > A EMPRESA </Link>
          <Link href="/work-with-us" > TRABALHE CONOSCO </Link>
        </nav>

        <div className="flex gap-6 flex-col">
          <div className="flex gap-3 flex-wrap text-white">
            <p className="inline-block w-full font-bold">REDES SOCIAIS</p>
            <Image width={24} height={24} src={"/images/whatsapp-unfill-icon.svg"} alt="" />
            <Image width={24} height={24} src={"/images/facebook-icon.svg"} alt="" />
          </div>
          <div className="flex flex-col gap-3 text-white">
            <p>(35) 3422-1540 (Mecânica)</p>
            <p>(35) 3025-0291 (Auto Peças)</p>
            <p>mecmundial@bol.com.br</p>
          </div>
        </div>

      </div>

      <p className="text-white">© 2023 Mundial Centro Automativo. Todos os direitos reservados.</p>
      <div className="bg-amber-300 h-1 w-3/4 absolute bottom-4 right-0" />
    </footer>
  )
}
