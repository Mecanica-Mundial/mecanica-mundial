import ServiceCard from "@/components/Atom/ServiceCard/ServiceCard";

interface TypeService {
  tituloStrong: string,
  tituloNormal: string,
  id: number,
  description: string,
  image: string
}

interface ServicesSessionProps {
    data: TypeService[]
}

export default function ServicesSession({data}: ServicesSessionProps) {

  return (

    <div className="bg-whiteMundial w-full font-out px-14 md-10:px-20 md-11:px-24 md-12:px-28 md-13:px-40 md-14:px-48 md-15:px-60 l-10:px-10 l-11:px-7 sm-13:px-4">
      <div className="p-10 l-11:px-5">
        <h1 className="cursor-default text-blackMundial text-[2.7rem] font-medium mb-8">SERVIÇOS</h1>
        <p className="cursor-default text-blackMundial text-xl font-normal md-13:text-2xl mb-8">
          Nossa missão é oferecer serviços personalizados aos nossos clientes
          com qualidade, agilidade e profissionais capacitados para cuidar dos
          mínimos detalhes do seu veículo.
        </p>
        <p className="cursor-default text-blackMundial text-xl md-13:text-2xl font-normal mb-8">
          Nossa satisfação é garantir o melhor produto e serviço com o menor
          preço e as melhores condições do mercado.
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-8">
        {data.map((servico: typeService) => (
          <ServiceCard
            key={servico.id}
            tituloStrong={servico.tituloStrong}
            tituloNormal={servico.tituloNormal}
            description={servico.description}
            image={servico.image}
          />
        ))}
      </div>
    </div>
  );
}
