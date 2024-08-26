import React from "react"
import Cabecalho from "./Cabecalho"

export interface PaginaProps {
  children: React.ReactNode,
  className?: string
}

const Pagina = ({ children, className }: PaginaProps) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Cabecalho />
        <main
          className={`
            w-[1200px] mx-auto flex-1
              ${className ?? ''} py-10
          `}
        >
          {children}
        </main>
      </div>
    </>
  )
}

export default Pagina
