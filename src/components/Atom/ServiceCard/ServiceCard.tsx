import "./index.css";

export default function ServiceCard({titleStrong, titleNormal, description, image}) {
  return (
    <div className="ServiceCard relative block rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-sky-500 hover:bg-sky-800 p-3 mb-7">
      <div className="w-10">
        <img src={image} alt="Ícone de Serviço" aria-label="Ícone de Serviço" />
      </div>
      <div id="titulo">
        <p className="absolute bottom-2 text-2xl font-bold leading-tight  text-neutral-50">
          {titleStrong}
        </p>
        <p className="absolute -bottom-4 text-xl font-medium leading-tight text-neutral-50">
          {titleNormal}
        </p>
      </div>
      <div className="p-3" id="detalhe_servico">
        <p className="text-base text-neutral-200 cursor-default">
          {description}
        </p>
      </div>
    </div>
  );
}
