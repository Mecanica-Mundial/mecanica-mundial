import ServiceCard from "@/components/Atom/ServiceCard/ServiceCard";
import "./index.css";

export default function ServicesSession({data}) {
  interface typeService {
    tituloStrong: string,
    tituloNormal: string,
    id: number,
    description: string,
    image: string
  }

  return (
    <div className="ServicesSession w-full">
      <div className="p-10">
        <h1 className="cursor-default">SERVIÇOS</h1>
        <p className="cursor-default">
          Nossa missão é oferecer serviços personalizados aos nossos clientes
          com qualidade, agilidade e profissionais capacitados para cuidar dos
          mínimos detalhes do seu veículo.
        </p>
        <p className="cursor-default">
          Nossa satisfação é garantir o melhor produto e serviço com o menor
          preço e as melhores condições do mercado.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 justify-items-center">
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
