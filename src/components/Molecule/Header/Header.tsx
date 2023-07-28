import { Link } from "../Link";

export default function Header() {

  return (
    <header
      className="flex justify-center items-center w-full h-20 bg-zinc-700 "
    >
      <nav className="h-fit flex gap-2">
        <Link path="/">
          HOME
        </Link>
        <Link path="/about" >
          A EMPRESA
        </Link>
        <Link path="/work-with-us" >
          TRABALHE CONOSCO
        </Link>
      </nav>
    </header>
  )
}
