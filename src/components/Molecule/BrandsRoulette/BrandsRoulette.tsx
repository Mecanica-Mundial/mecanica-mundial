<<<<<<< Updated upstream
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

=======
>>>>>>> Stashed changes
export default function BrandsRoulette() {
  const hyundai = "/images/ProjectMundial/hyundai-logo-1.png";
  const porsche = "/images/ProjectMundial/Porsche-Logo.png";
  const landRover = "/images/ProjectMundial/land-rover-Logo.png";
  const honda = "/images/ProjectMundial/png-transparent-honda-logo-brand-trademark-h-logo-angle-logo-car.png";
  const unkownCar = "/images/ProjectMundial/580b585b2edbce24c47b2cbf 1.png";
  const fiat = "/images/ProjectMundial/fiat-logo-2.png";
  const ford = "/images/ProjectMundial/Ford-Logo-PNG-Images-HD.png";
  const chevrolet = "/images/ProjectMundial/Chevrolet-Logo.png";
  const peugeot = "/images/ProjectMundial/png-transparent-peugeot-signs-car-signs-car-logo-peugeot-thumbnail.png";
  const mitsubish = "/images/ProjectMundial/9c1a2f4130f7a5073f89b9a6305237bc.png";
  const ferrari = "/images/ProjectMundial/580b585b2edbce24c47b2c52 1.png";
  const lamborghini = "/images/ProjectMundial/580b585b2edbce24c47b2c89 1.png";
  const toyota = "/images/ProjectMundial/5ec3e1ee58550c0004427739 1.png";
  const jaguar = "/images/ProjectMundial/Jaguar-Logo.png";

  const carArray: string[] = [
    hyundai, porsche, landRover, honda, unkownCar, fiat, ford, chevrolet,
    peugeot, mitsubish, ferrari, lamborghini, toyota, jaguar
  ];


  const [visibleIndices, setVisibleIndices] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastIndex = visibleIndices[0];
      const prevIndex = (lastIndex - 1 + carArray.length) % carArray.length;
      const newIndices = [prevIndex, ...visibleIndices.slice(0, -1)];
      setVisibleIndices(newIndices);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [visibleIndices]);

  return (
<<<<<<< Updated upstream
    <div className="bg-blue-500 mt-96 w-full w-screen h-32">
      <div className="flex flex-row-reverse space-x-4 justify-around items-center ml-10 mr-10 h-full">
        {visibleIndices.map((index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="w-3/4 h-auto" style={{ maxWidth: '80%', height: 'auto' }}>
              <Image
                src={carArray[index]}
                alt={`Car ${index}`}
                layout="responsive"
                width={100}
                height={60}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

=======
    <div className="bg-sky-500 h-[150px]">
      <div className="overflow-hidden whitespace-nowrap py-[50px] px-0 w-[calc(500px*28)]">
        <div className="inline-flex animate-scroll">
          <img src="/images/logos/volkswagen.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/landrover.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/mercedes.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/jaguar.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/chevrolet.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/porshe.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/ford.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/pegeout.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/honda.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/fiat.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/hyundai.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/subaru.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/toyota.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/lamborghini.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/ferrari.svg" alt=""  className="h-[50px] mx-[30px]"/>
        </div>
        <div className="inline-flex animate-scroll">
          <img src="/images/logos/volkswagen.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/landrover.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/mercedes.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/jaguar.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/chevrolet.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/porshe.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/ford.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/pegeout.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/honda.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/fiat.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/hyundai.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/subaru.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/toyota.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/lamborghini.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/ferrari.svg" alt=""  className="h-[50px] mx-[30px]"/>
        </div>
        <div className="inline-flex animate-scroll">
          <img src="/images/logos/volkswagen.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/landrover.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/mercedes.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/jaguar.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/chevrolet.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/porshe.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/ford.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/pegeout.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/honda.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/fiat.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/hyundai.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/subaru.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/toyota.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/lamborghini.svg" alt=""  className="h-[50px] mx-[30px]"/>
          <img src="/images/logos/ferrari.svg" alt=""  className="h-[50px] mx-[30px]"/>
        </div>
      </div>
    </div>
  )
>>>>>>> Stashed changes
}


