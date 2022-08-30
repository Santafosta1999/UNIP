import { Request, Response } from 'express';

import db from '../database/connection';

class Produtos {
  async UnicoProduto(req: Request, res: Response) {
    try {
      const produtoId = req.params.id;

      const listaProdutos = await db('Produto')
        .where('Produto.Id_Produto', produtoId)
        .select('Produto.Id_Produto', 'Produto.Nome', 'Produto.Descricao', 'Produto.ImageUrl');

      const vendedores = await db('Vendedor')
        .join('ProdutoVendedor', 'ProdutoVendedor.Id_Vendedor', 'Vendedor.Id_Vendedor')
        .where('ProdutoVendedor.Id_Produto', produtoId)
        .select('Vendedor.Id_Vendedor', 'Vendedor.RazaoSocial', 'ProdutoVendedor.Valor')

      const promo = await db('ProdutoVendedor')
        .join('Vendedor', 'ProdutoVendedor.Id_Vendedor', 'Vendedor.Id_Vendedor')
        .join('ProdutoPromocao', 'ProdutoPromocao.Id_Vendedor', 'ProdutoVendedor.Id_Vendedor')
        .where({
          'ProdutoVendedor.Id_Produto': produtoId,
          'ProdutoPromocao.Id_Produto': produtoId
        })
        .select('ProdutoPromocao.Id_Vendedor' ,'ProdutoPromocao.Valor as Valor2')
        .groupBy('ProdutoVendedor.Id_Vendedor')

      const retorno = listaProdutos.map(produto => {
        return {
          ...produto,
          vendedores,
          promo
        }
      });

      console.log(promo);

      return res.send(retorno);

    } catch (err) {
      res.status(400).send(err);
    }
  }

  async UnicoProdutoPromocao(req: Request, res: Response) {
    try {
      const produtoId = req.params.id;

      const listaProdutos = await db('Produto')
        .where('Produto.Id_Produto', produtoId)
        .select('Produto.Id_Produto', 'Produto.Nome', 'Produto.Descricao', 'Produto.ImageUrl')

      const vendedores = await db('Vendedor')
        .join('ProdutoPromocao', 'ProdutoPromocao.Id_Vendedor', 'Vendedor.Id_Vendedor')
        .where('ProdutoPromocao.Id_Produto', produtoId)
        .select('Vendedor.RazaoSocial', 'ProdutoPromocao.Valor')

      const retorno = listaProdutos.map(produto => {
        return {
          ...produto,
          vendedores
        }
      });

      return res.send(retorno);

    } catch (err) {
      res.status(400).send(err);
    }
  }

  async Promocao(req: Request, res: Response) {
    try {

      const now = new Date();
      const today = now.toLocaleDateString();

      const listaProdutos = await db('Produto')
        .join('ProdutoPromocao', 'Produto.Id_Produto', 'ProdutoPromocao.Id_Produto')
        .join('Vendedor', 'Vendedor.Id_Vendedor', 'ProdutoPromocao.Id_Vendedor')
        .where('ProdutoPromocao.DataFimPromocao', '>', today)
        .select('Produto.Id_Produto', 'Produto.Nome', 'Produto.Descricao', 'Produto.ImageUrl', 'ProdutoPromocao.Valor')


      return res.json(listaProdutos);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async MaisVendidos(req: Request, res: Response) {
    try {
      const listaProdutos = await db('Produto')
        .join('ProdutoVenda', 'ProdutoVenda.Id_Produto', 'Produto.Id_Produto')
        .join('ProdutoPromocao', 'ProdutoPromocao.Id_Promocao', 'ProdutoVenda.Id_Promocao')
        .select('Produto.Id_Produto', 'ProdutoPromocao.Valor', 'Produto.Descricao', 'Produto.Nome', 'Produto.ImageUrl')
        .orderBy('ProdutoVenda.Quantidade', 'desc')

      return res.json(listaProdutos);
    } catch (err) {
      return res.status(400).json({
        error: 'Unexpected error while creating new class'
      });
    }
  }

  async All(req: Request, res: Response) {
    try {
      const listaProdutos = await db('Produto')
        .join('ProdutoVendedor', 'ProdutoVendedor.Id_Produto', 'Produto.Id_Produto')
        .select('Produto.Id_Produto', 'Produto.Nome', 'Produto.Descricao', 'Produto.ImageUrl', 'ProdutoVendedor.Valor')


      return res.json(listaProdutos);
    } catch (err) {
      return res.status(400).json({
        error: 'Unexpected error while creating new class'
      });
    }
  }
}
export default new Produtos;