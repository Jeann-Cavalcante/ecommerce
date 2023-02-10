import { Request, Response } from "express";
import usePrisma from "../../prisma";

type ItemOrder = {
  id_pedido: string,
  id_produto: string,
  quantidade: number,
}

async function createItemOrder(req: Request, res: Response) {
  try{
    const { id_pedido, id_produto, quantidade }: ItemOrder = req.body;

    const itemOrder = await usePrisma.itens_pedidos.create({
      data: {
        id_pedido,
        id_produto,
        quantidade,
      },     
      
    });
  
    return res.status(201).json(itemOrder);

  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

export default createItemOrder;