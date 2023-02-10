import { Request, Response } from "express";
import usePrisma from "../../prisma";

type Order = {
  id_cliente: string,
  valor_total: number,
  status: string,
  forma_pagamento: string,
  valor_frete: number,
} 

async function createOrder(req: Request, res: Response) {
  try{
    const { id_cliente, valor_total, status, forma_pagamento, valor_frete }: Order = req.body;
  
    const order = await usePrisma.pedidos.create({
      data: {
        id_cliente,
        valor_total,
        status,
        forma_pagamento,
        valor_frete,
      },     
      
    });
  
    return res.status(201).json(order);

  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

export default createOrder;