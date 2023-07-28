import { LinkNav } from "../LinkNav";

export default function Header() {

  return (
    <header
      className="flex justify-center items-center w-full h-20 bg-zinc-700 "
    >
      <nav className="h-fit flex gap-2">
        <LinkNav path="/">
          HOME
        </LinkNav>
        <LinkNav path="/about" >
          A EMPRESA
        </LinkNav>
        <LinkNav path="/work-with-us" >
          TRABALHE CONOSCO
        </LinkNav>
      </nav>
    </header>
  )
}
