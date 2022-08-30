import express, { json } from 'express';

import ProdutosController from './controllers/Produto';

const routes = express.Router();

routes.get('/Produto/:id', ProdutosController.UnicoProduto);
routes.get('/Promocao/Produto/:id', ProdutosController.UnicoProdutoPromocao);
routes.get('/All', ProdutosController.All);
routes.get('/Promocao', ProdutosController.Promocao);
routes.get('/MaisVendidos', ProdutosController.MaisVendidos);


export default routes;