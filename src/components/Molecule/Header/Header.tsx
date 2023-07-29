import Image from "next/image";
import { LinkNav } from "../LinkNav";



export default function Header() {

  return (
    <header
      className="flex justify-around items-center w-full h-20 bg-zinc-700 shadow-amber-200 shadow-lg"
    >
      <Image width={218} height={50} src={"/images/mundial.svg"} alt="" className="w-56"/>
      <nav className="h-fit flex gap-2">
        <LinkNav path="/">
          HOME
        </LinkNav>
        <LinkNav path="/about" >
          A EMPRESA
        </LinkNav>
        <LinkNav path="/work-with-us" >
          TRABALHE CONOSCO
        </LinkNav>
      </nav>
      <div className="flex gap-4">
        <Image width={24} height={24} src={"/images/whatsapp-icon.svg"} alt="" />
        <Image width={24} height={24} src={"/images/map-icon.svg"} alt="" />
      </div>
    </header>
  )
}
