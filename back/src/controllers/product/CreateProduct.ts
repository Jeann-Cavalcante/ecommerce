import usePrisma from "../../prisma";
import { Request, Response } from "express";

type Product = {
  nome: string;
  descricao: string;
  preco: number;
  preco_custo: number;
  categoria: string;
  cor: string;
  preco_sugerido: number;
  marca: string;
  nota: number;
  condicao: string;
  detalhes: string;
  estoque: number;
};

async function CreateProduct(req: Request, res: Response) {
  try {
    const {
      nome,
      descricao,
      preco,
      preco_custo,
      categoria,
      cor,
      preco_sugerido,
      marca,
      nota,
      condicao,
      detalhes,
      estoque,
    } = req.body as Product;

    console.log(req.body);
    
    if(!req.file) {
      return res.status(400).json({ error: 'Image is required' });
    }
    
      const { originalname, filename } = req.file;
    console.log(filename);

    const product = await usePrisma.produto.create({
      data: {
        nome,
        descricao,
        preco: Number(preco),
        preco_custo: Number(preco_custo),
        categoria,
        cor,
        preco_sugerido: Number(preco_sugerido),
        marca,
        nota: Number(nota),
        condicao,
        url_imagem: filename,
        detalhes,
        estoque: Number(estoque),
      },
    });

    return res.status(201).json(product);
  } catch (error) {
     res.status(400).json({ error: error });
     console.log(error);
     return;
  }
}

export default CreateProduct;