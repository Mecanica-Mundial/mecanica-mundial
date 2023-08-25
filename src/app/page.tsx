import ContactSession from "@/components/Molecule/ContactSession/ContactSession"
import ServicesSession from "@/components/Molecule/ServicesSession/ServicesSession";
import {SERVICES_MOCK} from "../mocks/Services.mock";
import BrandsRoulette from "@/components/Molecule/BrandsRoulette/BrandsRoulette";


export default function Home() {
  return (
    <>
    <ServicesSession data={SERVICES_MOCK} />
    <BrandsRoulette />
    <ContactSession/>
    </>
  )
}
