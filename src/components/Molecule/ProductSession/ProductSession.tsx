"use client";
import { motion } from "framer-motion";
import ProductCard from "@/components/Atom/ProductCard/ProductCard";
import { Carousel } from "react-responsive-carousel";

export default function ProductSession() {
  return (
    <div className="flex flex-col w-full bg-white text-black p-6 pt-8">
      <h1 className="text-5xl md:text-5xl font-bold mb-4 text-black-500 ml-4 mb-4 font-outfit">
        PRODUTOS
      </h1>
      <p className="text-lg md:text-xl text-left mb-4 ml-4 font-outfit">
        A Mundial oferece produtos de alta qualidade, garantindo durabilidade e
        desempenho excepcional.
      </p>
      <p className="text-lg md:text-xl text-left mb-12 ml-4 mt-3 font-outfit">
        Sua reputação é marcada pela integridade, assegurando que todos os
        produtos são autênticos e atendem aos mais altos padrões da indústria.
      </p>

      {/* Adicionando espaçamento de 3rem (48px) */}
      <div className="w-full mt-12">
        <Carousel
          showArrows={false}
          showIndicators={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay={false}
          interval={5000}
          stopOnHover={true}
          centerMode={true}
          swipeable={true}
          emulateTouch={true}
          transitionTime={500}
          swipeScrollTolerance={1}
          centerSlidePercentage={100}
          className="d-flex justify-between"
        >
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
