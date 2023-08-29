import Image from "next/image"
import Link from "next/link"

interface typeProps {
  title: string,
  description: string,
  image: string
  url: string
}

export default function ProductCard({title, description, image, url}: typeProps) {
  return (
    <div className="w-[18rem] h-[28rem] border border-primary border-solid rounded-2xl font-out group shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] relative block flex-none mr-5">
      <div className="mx-4 my-5 h-1/4 relative block">
        <Image  layout="fill" objectFit="contain" src={image} alt={title}/>
      </div>
      <div className="mx-9 h-2/4 flex flex-wrap justify-center text-center content-center">
        <p className="mb-5 bottom-2 text-xl font-medium leading-tight text-blackMundial">{title}</p>
        <p className="mb-5 -bottom-4 text-l font-normal leading-tight text-blackMundial">{description}</p>
      </div>
      <div className="text-center h-1/4 mx-4">
        <Link href={url} target="_blank" className="text-whiteMundial font-bold bg-primary px-6 py-3 rounded-xl hover:bg-sky-800">SAIBA MAIS</Link>
      </div>
    </div>
  )
}
