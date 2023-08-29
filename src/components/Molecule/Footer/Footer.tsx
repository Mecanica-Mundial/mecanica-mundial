"use client";

import Image from "next/image";
import Link from "next/link";

import { Facebook, Whatsapp } from "iconsax-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();

  return (
    <footer className="flex items-center flex-col gap-4 w-full bg-blackMundial py-8 px-4 sm:px-8 relative" >
      <div className="bg-amber-300 h-1 w-11/12 sm:w-3/4 absolute top-4 left-0"/>
      <div className="flex justify-between flex-col gap-8 sm:gap-4 sm:flex-row items-center w-4/5 sm:w-3/5 sm:h-[255px] py-8 sm:py-12">
        <Image 
          width={159}
          height={256}
          src={"/images/Logo_transparent.png"}
          alt="Logo da Mecânica Mundial - traços formando um globo terrestre"
          aria-label="Logo da Mecânica Mundial"
          className="h-full"
        />

        <nav className="flex flex-col items-center sm:items-start justify-between gap-2 sm:gap-4 h-full text-white text-sm">
          <Link 
            href="/" 
            className={pathName == "/" ? "text-blue-500 border-b-2 border-blue-500" : ""}
          > HOME </Link>
          <Link 
            href="/about"
            className={pathName == "/about" ? "text-blue-500 border-b-2 border-blue-500" : ""}
          > A EMPRESA </Link>
          <Link 
            href="/products"
            className={pathName == "/products" ? "text-blue-500 border-b-2 border-blue-500" : ""}
          > PRODUTOS </Link>
          <Link 
            href="/services"
            className={pathName == "/services" ? "text-blue-500 border-b-2 border-blue-500" : ""}
          > SERVIÇOS </Link>
          <Link 
            href="/work-with-us"
            className={pathName == "/work-with-us" ? "text-blue-500 border-b-2 border-blue-500" : ""}
          > TRABALHE CONOSCO </Link>
        </nav>

        <div className="flex gap-6 flex-col items-center sm:items-start">
          <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start flex-wrap text-white">
            <p className="inline-block w-full font-bold text-center sm:text-start">REDES SOCIAIS</p>
            <Link 
              href={"https://wa.me/5535991054663"}
              target="_blank"
              aria-label="link para whatsapp da Mecânica Mundial"
            >
              <Whatsapp 
                size="24"
                variant="Bold"
                className="text-white hover:text-blue-500"
              />
            </Link>
            <Link 
              href={"https://www.facebook.com/mecanicamundial"}
              target="_blank"
              aria-label="link para a página no facebook da Mecânica Mundial"
            >
              <Facebook 
                size="24"
                variant="Bold"
                className="text-white hover:text-blue-500"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-3 text-white">
            <p>(35) 3422-1540 (Mecânica)</p>
            <p>(35) 3025-0291 (Auto Peças)</p>
            <p>mecmundial@bol.com.br</p>
          </div>
        </div>

      </div>

      <p className="text-white text-[10px] sm:text-base">© 2023 Mundial Centro Automativo. Todos os direitos reservados.</p>
      <div className="bg-amber-300 h-1 w-11/12 sm:w-3/4 absolute bottom-4 right-0" />
    </footer>
  )
}
