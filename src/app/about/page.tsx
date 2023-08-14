import Image from "next/image"
import Link from "next/link"
import mecanica from '/images/C. Automotivo Mundial2.jpg'

export default function About () {
    return (
        <>
            <section className="w-full h-[40rem] bg-whiteMundial flex pr-6 pl-6">
                <div className=" bg-stone-500 w-[60%] h-[40rem]">Aqui vai as infos</div>
                <div className=" w-[40%] h-[40rem] bg-stone-700">Aqui vai a img</div>
            </section>
        </>
    )
}