"use client";

import Image from "next/image";
import { LinkNav } from "../LinkNav";
import { CloseSquare, HambergerMenu, Map, Whatsapp } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {

  const [showMobileHeader, setShowMobileHeader] = useState<boolean>(false);

  const handleMobileMenu = () => {setShowMobileHeader(prevState => !prevState)}

  return (
    <header
      className="flex justify-between sm:justify-around items-center w-full h-20 px-4 bg-zinc-700 shadow-amber-200 shadow-sm fixed top-0 z-50"
    >
      <Image 
        width={218}
        height={50}
        src={"/images/mundial.svg"}
        alt="logo da mecânica mundial - traços que formam um globo terreste"
        className="w-32 sm:w-56"
      />
      
      <button className="sm:hidden" onClick={handleMobileMenu}>
        { 
          showMobileHeader 
          ? <CloseSquare size="32" color="#FFFFFF"/>
          : <HambergerMenu size="32" color="#FFFFFF"/>
        }
      </button>

      <div 
        className={
          showMobileHeader
          ? "flex justify-between items-center gap-12 flex-col absolute top-20 right-0 bg-blue-900 px-4 py-8 rounded-lg" 
          : "max-sm:hidden flex justify-between gap-32 flex-row"
        }
      >
        <nav className="h-fit flex flex-col items-center sm:flex-row gap-2">
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
      </div>
    </header>
  )
}
