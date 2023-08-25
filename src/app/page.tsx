<<<<<<< Updated upstream
import BrandsRoulette from "@/components/Molecule/BrandsRoulette/BrandsRoulette"







=======
import ServicesSession from "@/components/Molecule/ServicesSession/ServicesSession";
import {SERVICES_MOCK} from "../mocks/Services.mock";
import BrandsRoulette from "@/components/Molecule/BrandsRoulette/BrandsRoulette";
>>>>>>> Stashed changes


export default function Home() {
  return (
<<<<<<< Updated upstream
    <div>
    <BrandsRoulette />
    </div>
=======
    <>
      <ServicesSession data={SERVICES_MOCK} />
      <BrandsRoulette />
    </>
>>>>>>> Stashed changes
  )
}
