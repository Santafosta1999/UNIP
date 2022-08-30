import ProdutoVendedor from './Vendedor';
import Promocao from './Promocao';

interface Produto{
    Id_Produto: number,
    Nome: string,
    Descricao: string,
    ImageUrl: string,
    Valor: number,
    vendedores?: ProdutoVendedor[],
    promo?: Promocao[]
}

export default Produto;