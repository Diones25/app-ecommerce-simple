import useCarrinho from "@/data/hooks/useCarrinho";
import Produto from "@/data/model/Produto"
import Image from "next/image";

export interface CartaoProdutoProps {
  produto: Produto
}

const CartaoProduto = ({ produto }: CartaoProdutoProps) => {
  const { adicionar } = useCarrinho();
  const { nome, descricao, preco, imagem } = produto;

  return (
    <>
      <div className="flex flex-col w-72 bg-zinc-900">
        <div className="relative w-72 h-52">
          <Image src={imagem} alt={nome} fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-4 p-5">
          <h2 className="text-xl font-bold">{nome}</h2>
          <p className="flex-1 text-sm text-zinc-400">{descricao}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold mt-2">{preco}</span>
            <button
              onClick={() => adicionar(produto)}
              className="border rounded-full px-3 py-1 text-sm"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartaoProduto
