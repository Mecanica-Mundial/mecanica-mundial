"use client";

import ProductCard from "@/components/Atom/ProductCard/ProductCard";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface TypeProduct {
    title: string;
    id: number;
    description: string;
    image: string;
    url: string;
}

interface ProductCaroselProps {
    data: TypeProduct[]
}

export default function ProductCarosel({ data }: ProductCaroselProps) {
    const carousel = useRef<HTMLDivElement | null>(null);
    const buttons = useRef<HTMLDivElement | null>(null);

    const handleLeftClick = (e:any) => {
        e.preventDefault();
        carousel.current!.scrollLeft -= 308;
    }

    const handleRightClick = (e:any) => {
        e.preventDefault();
        carousel.current!.scrollLeft += 308;
    }

    useEffect(() => {
        if(data.length > 4){
            buttons.current!.style.display = "flex";
        } else {
            buttons.current!.style.display = "none";
        }
    }, [data]);

    return (
        <div className="w-[1215px] l-12:w-[596px] l-13:w-[288px] relative">
            <div ref={carousel} className="flex overflow-x-auto overflow-y-hidden scroll-smooth h-[30rem] scrollbar-hide">
                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        url={product.url}
                    />
                ))}
            </div>
            <div ref={buttons} className="w-[1265px] l-12:w-[646px] l-13:w-[338px] justify-between absolute top-[45%] left-[-25px] hidden">
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
