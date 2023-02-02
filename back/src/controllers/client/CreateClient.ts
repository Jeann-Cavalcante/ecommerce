import { Request, Response } from "express";
import { hash } from "bcryptjs";
import usePrisma from "../../prisma";

interface ClientRequest  {
  nome: string;
  email: string;
  senha: string;
  endereco: string;
  telefone: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  cpf_cnpj: string;
  sexo: string;
  nascimento: string;
};


async function CreateClient( req: Request, res: Response) {
try {
  const { nome, email, senha, endereco, telefone, bairro, cidade, estado, cep, cpf_cnpj, sexo, nascimento } = req.body;

  const clientExists = await usePrisma.client.findFirst({
    where: {
      email,
    },
  });

  if (clientExists) {
    return res.status(400).json({ error: "Client already exists" }) ;
  }

  const password = await hash(senha, 8);

  const client = await usePrisma.client.create({
    data: {
      nome,
      email,
      senha: password,
      endereco,
      telefone,
      bairro,
      cidade,
      estado,
      cep,
      cpf_cnpj,
      sexo,
      nascimento,
    },
    select: {
      id: true,
      email: true,
      endereco: true,
      telefone: true,
      bairro: true,
      cidade: true,
      estado: true,
      cep: true,
      cpf_cnpj: true,
      sexo: true,
      nascimento: true,
      senha: false,
    },
  });

  return res.status(201).json(client);

} catch (error) {
  res.status(400).json({ error: error });
   console.log(error);
}
};

export { CreateClient };