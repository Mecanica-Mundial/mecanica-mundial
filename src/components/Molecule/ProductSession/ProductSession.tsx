import ProductCarosel from "@/components/Atom/ProductCarosel/ProductCarosel";
import { PRODUCTS_MOCK } from "@/mocks/Products.mock";

export default function ProductSession() {  

  return (
    <div className="bg-whiteMundial px-16 md-10:px-20 md-11:px-28 md-12:px-36 md-13:px-44 md-14:px-52 md-15:px-60 l-10:px-14 l-11:px-6 sm-13:px-4" id="products">
      <div className="p-10">
        <h1 className="cursor-default text-blackMundial text-[2.7rem] font-medium mb-8">
          PRODUTOS
        </h1>
        <p className="cursor-default text-blackMundial text-xl font-normal mb-8">
          A Mundial oferece produtos de alta qualidade, garantindo durabilidade
          e desempenho excepcional.
        </p>
        <p className="cursor-default text-blackMundial text-xl font-normal mb-8">
          Sua reputação é marcada pela integridade, assegurando que todos os
          produtos são autênticos e atendem aos mais altos padrões da indústria.
        </p>
      </div>
      <div className="p-10 flex justify-center">
        <ProductCarosel data={PRODUCTS_MOCK} />
      </div>
    </div>
  );
}
