import Produto from "../model/Produto";

const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Camiseta',
    descricao: 'Camiseta de algodão 100% com estampa exclusiva.',
    preco: 49.99,
    imagem: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820'
  },
  {
    id: 2,
    nome: 'Calça Jeans',
    descricao: 'Calça jeans confortável e estilosa.',
    preco: 89.99,
    imagem: 'https://images.unsplash.com/photo-1510734790177-c931e3956547'
  },
  {
    id: 3,
    nome: 'Tênis Esportivo',
    descricao: 'Tênis esportivo leve e durável.',
    preco: 119.99,
    imagem: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f'
  },
  {
    id: 4,
    nome: 'Relógio de Pulso',
    descricao: 'Relógio de pulso à prova d\'água.',
    preco: 199.99,
    imagem: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77'
  },
  {
    id: 5,
    nome: 'Mochila',
    descricao: 'Mochila espaçosa com vários compartimentos.',
    preco: 79.99,
    imagem: 'https://images.unsplash.com/photo-1480859786001-3f3bfdf20f2c'
  }
]

export default produtos;