"use client";
import ProductCard from "@/components/Atom/ProductCard/ProductCard";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProductCarosel({ data }: any) {
  interface typeProduct {
    title: string;
    id: number;
    description: string;
    image: string;
    url: string;
  }
  const carousel = useRef(null);

  const handleLeftClick = (e:any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 308;
  }

  const handleRightClick = (e:any) => {
    e.preventDefault();
    carousel.current.scrollLeft += 308;
  }

  useEffect(() => {
    let buttons = document.getElementById("buttons_chevron");
    if(data.length > 4){
      buttons.style.display = "flex";
    }else{
      buttons.style.display = "none";
    }
  });


  return (
    <div className="lg:w-[1215px] md:w-[596px] w-[288px] relative">
      <div ref={carousel} className="flex overflow-x-auto overflow-y-hidden scroll-smooth h-[30rem] scrollbar-hide">
        {data.map((product: typeProduct) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            url={product.url}
          />
        ))}
      </div>
      <div id="buttons_chevron" className="lg:w-[1265px] md:w-[646px] w-[338px] justify-between absolute top-[45%] left-[-25px] hidden">
        <button className="cursor-pointer" onClick={handleLeftClick}>
          <Image
            src="/images/chevron-left-solid.svg"
            alt="scroll left"
            width={25}
            height={25}
          />
        </button>
        <button className="cursor-pointer" onClick={handleRightClick}>
          <Image
            src="/images/chevron-right-solid.svg"
            alt="scroll right"
            width={25}
            height={25}
            className="primary"
          />
        </button>
      </div>
    </div>
  );
}
