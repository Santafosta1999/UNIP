import knex from '../database/connection';

class Produto {
  async show(req, res) {
    const listaProdutos = await knex('tabela').select('*');

    const produtos = listaProdutos.map(produto => {
      return {
        id: id,
        descricao: descricao
      };
    });
    return res.json(produtos);
  }
  async index(req, res) {
    const { descricao, preco, marca } = req.query;

    const produtos = await knex('tabela')
  }
}

export default new Produto;