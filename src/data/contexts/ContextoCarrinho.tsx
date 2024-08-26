"use client"
import React, { createContext, useEffect, useState } from "react"
import ItemCarrinho from "../model/ItemCarrinho"
import Produto from "../model/Produto"
import useLocalStorage from "../hooks/useLocalStorage"

type Props = {
  children: React.ReactNode
}

type ContextoCarrinhoProps = {
  itens: ItemCarrinho[],
  qtdeItens: number,
  adicionar: (item: Produto) => void
  remover: (item: Produto) => void
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any);

export function ProvedorCarrinho({ children }: Props) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const { get, set, remove } = useLocalStorage();

  useEffect(() => {
    const carrinho = get('carrinho');
    if (carrinho) {
      setItens(carrinho)
    }
  }, [get])

  function adicionar(produto: Produto) {
    const indice = itens.findIndex((i) => i.produto.id == produto.id);

    if (indice === -1) {
      alterarItens([...itens, { produto, quantidade: 1}]);
    }
    else {
      const novosItens = [...itens]
      novosItens[indice].quantidade++;
      alterarItens(novosItens);
    }
  }

  function remover(produto: Produto) {
    const novoItens = itens.map((item) => {
      if (item.produto.id === produto.id) {
        item.quantidade--
      }
      return item;
    }).filter((item) => item.quantidade > 0)

    alterarItens(novoItens);
  }

  function alterarItens(novosItens: ItemCarrinho[]) {
    setItens(novosItens);
    set('carrinho', novosItens);
  }

  return (
    <ContextoCarrinho.Provider value={{
      itens,
      adicionar,
      remover,
      get qtdeItens() {
        return itens.reduce((total, item) => total + item.quantidade, 0)
      }
    }}>
      {children}
    </ContextoCarrinho.Provider>
  )
}

export default ContextoCarrinho;