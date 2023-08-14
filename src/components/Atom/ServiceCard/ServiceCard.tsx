import Image from "next/image";

interface typeProps {
  tituloStrong: string,
  tituloNormal: string,
  description: string,
  image: string,
}

export default function ServiceCard({tituloStrong, tituloNormal, description, image}: typeProps) {

  return (
    <div className="w-[15.625rem] font-out group duration-500 min-h-[380px] relative block rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-sky-500 hover:bg-sky-800 p-3 mb-7">
      <div className="w-10">
        <Image className="group-hover:hidden" src={image} width={40} height={40} alt="Ícone de Serviço" aria-label="Ícone de Serviço" />
      </div>
      <div>
        <p className="absolute mb-8 bottom-2 text-2xl font-bold leading-tight group-hover:hidden text-neutral-50">
          {tituloStrong}
        </p>
        <p className="absolute mb-8 -bottom-4 text-xl font-normal leading-tight group-hover:hidden text-neutral-50">
          {tituloNormal}
        </p>
      </div>
      <div className="p-3 hidden h-full group-hover:flex group-hover:items-center group-hover:flex-col group-hover:justify-center">
        <p className="text-base text-neutral-200 cursor-default">
          {description}
        </p>
      </div>
    </div>
  );
}
