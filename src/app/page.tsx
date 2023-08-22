import ContactSession from "@/components/Molecule/ContactSession/ContactSession"
import ServicesSession from "@/components/Molecule/ServicesSession/ServicesSession";
import {SERVICES_MOCK} from "../mocks/Services.mock";



export default function Home() {
  return (
    <>
    <h1>Mecanica mundial</h1>
    <ServicesSession data={SERVICES_MOCK} />
    <ContactSession/>
    </>
  )
}
