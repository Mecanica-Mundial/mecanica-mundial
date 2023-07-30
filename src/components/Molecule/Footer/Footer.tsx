import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center flex-col gap-4 w-full bg-zinc-700 p-8" >
      <div className="flex justify-between w-4/5 border-amber-300 border-b-2 py-8">
        <Image 
          width={420}
          height={420}
          src={"/images/Logo_transparent.png"}
          alt=""
          className="w-32"
        />

        <nav className="flex flex-col gap-2 text-white">
          <Link href="/" > HOME </Link>
          <Link href="/about" > A EMPRESA </Link>
          <Link href="/work-with-us" > TRABALHE CONOSCO </Link>
        </nav>

        <div className="text-white">
          <p>(35) 3422-1540 (Mecânica)</p>
          <p>(35) 3025-0291 (Auto Peças)</p>
          <p>mecmundial@bol.com.br</p>
        </div>

        <div className="flex gap-4 items-start">
          <Image width={24} height={24} src={"/images/whatsapp-unfill-icon.svg"} alt="" />
          <Image width={24} height={24} src={"/images/facebook-icon.svg"} alt="" />
        </div>
      </div>

      <p className="text-white">© 2023 Mundial Centro Automativo. Todos os direitos reservados.</p>
    </footer>
  )
}
