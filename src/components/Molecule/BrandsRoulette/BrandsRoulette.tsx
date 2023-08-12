"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
      const newIndices: number[] = [];
      while (newIndices.length < 7) {
        const randomIndex: number = Math.floor(Math.random() * carArray.length);
        if (!newIndices.includes(randomIndex)) {
          newIndices.push(randomIndex);
        }
      }
      setVisibleIndices(newIndices);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-blue-500 mt-96 w-full w-screen">
      <div className="flex flex-row space-x-4 h-48 justify-around ml-10 mr-10">
        {visibleIndices.map((index) => (
          <div key={index}>
            <Image
              className="h-24 mt-10 w-24"
              src={carArray[index]}
              width={100}
              height={60}
              alt={`Car ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


