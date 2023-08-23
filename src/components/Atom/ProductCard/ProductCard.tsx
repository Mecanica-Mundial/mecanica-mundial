"use client";
import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Products from "../../../mocks/Product.mock";

export default function ProductCard() {
  // Defina o número máximo de cards que você deseja mostrar
  const maxCardsToShow = 3;

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center ">
        {Products.slice(0, maxCardsToShow).map((product, index) => {
          return (
            <div
              key={index}
              className="w-72 h-96 m-4 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="h-48 overflow-hidden rounded-t-xl">
                <Image
                  width={300}
                  height={300}
                  src={product.image}
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h5 className="mb-2 block font-sans text-center font-outfit text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {product.title}
                </h5>
                <p className="mt-2 mb-2 block font-sans text-center font-outfit text-sm font-light leading-relaxed text-inherit antialiased">
                  {product.description}
                </p>
                <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-2 px-4 text-center font-outfit text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-blue-600 focus:opacity-85 focus:shadow-lg active:opacity-85 active:shadow-lg disabled:pointer-events-none disabled:opacity-50"
                >
                  SAIBA MAIS
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
