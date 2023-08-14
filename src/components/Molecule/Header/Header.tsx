import Image from "next/image";
import { LinkNav } from "../LinkNav";
import { Map, Whatsapp } from "iconsax-react";
import Link from "next/link";

export default function Header() {

  return (
    <header
      className="flex justify-around items-center w-full h-20 bg-zinc-700 shadow-amber-200 shadow-sm"
    >
      <Image 
        width={218}
        height={50}
        src={"/images/mundial.svg"}
        alt="logo da mecânica mundial - traços que formam um globo terreste"
        className="w-56"
      />
      <nav className="h-fit flex gap-2">
        <LinkNav path="/">
          HOME
        </LinkNav>
        <LinkNav path="/services" >
          SERVIÇOS
        </LinkNav>
        <LinkNav path="/products" >
          PRODUTOS
        </LinkNav>
        <LinkNav path="/about" >
          A EMPRESA
        </LinkNav>
        <LinkNav path="/work-with-us" >
          TRABALHE CONOSCO
        </LinkNav>
      </nav>
      <div className="flex gap-4">
        <Link href={"https://wa.me/5535991054663"} target="_blank" aria-label="Whatsapp">
          <Whatsapp
            size="24" 
            variant="Bold" 
            className="text-white hover:text-blue-500"
          />
        </Link>
        <Link href={"/contact"} aria-label="Localização da Mecânica Mundial">
          <Map
            size="24" 
            className="text-white hover:text-blue-500"
          />
        </Link>
      </div>
    </header>
  )
}
