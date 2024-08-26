"use client"
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <ProvedorCarrinho>
      {children}
    </ProvedorCarrinho>
  )
}