import ContactSession from "@/components/Molecule/ContactSession/ContactSession"
import ServicesSession from "@/components/Molecule/ServicesSession/ServicesSession";
import Hero from '@/components/Molecule/Hero/Hero';
import {SERVICES_MOCK} from "../mocks/Services.mock";



export default function Home() {
  return (
    <>
    <Hero/>
    <ServicesSession data={SERVICES_MOCK} />
    <ContactSession/>
    </>
  )
}
