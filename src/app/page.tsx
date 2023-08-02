import ServicesSession from "@/components/Molecule/ServicesSession/ServicesSession";
import {SERVICES_MOCK} from "../mocks/Services.mock";


export default function Home() {
  return (
    <ServicesSession data={SERVICES_MOCK} />
  )
}
