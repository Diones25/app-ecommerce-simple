"use client"
import useCarrinho from "@/data/hooks/useCarrinho"
import { IconShoppingCart } from "@tabler/icons-react"
import Link from "next/link"

const Carrinho = () => {
  const { qtdeItens } = useCarrinho();
  return (
    <>
      <Link href={"/carrinho"}>
        <div className="flex relative">
          <IconShoppingCart size={32} stroke={1} />
          <div
            className="
              absolute -top-2 -right-2 w-5 h-5 bg-red-600 rounded-full
              flex justify-center items-center text-xs
            "
          >
            {qtdeItens}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Carrinho
