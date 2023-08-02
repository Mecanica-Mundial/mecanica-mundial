import "./index.css";

export default function ServiceCard({titleStrong, titleNormal, description, image}) {
  return (
    <div className="ServiceCard relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-sky-500 hover:bg-sky-800 p-3 mb-7">
      <div className="w-10">
        <img src={image} alt="" />
      </div>
      <div id="titulo">
        <h5 className="absolute bottom-7 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          <strong>{titleStrong}</strong><br /> {titleNormal}
        </h5>
      </div>
      <div className="p-3" id="detalhe_servico">
        <p className="text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
      </div>
    </div>
  );
}
