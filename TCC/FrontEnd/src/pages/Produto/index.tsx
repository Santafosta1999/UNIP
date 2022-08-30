import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import api from '../../services/api';
import Produto from '../../models/Produto';

import Header from '../Components/Header';

import './style.css';

interface Props {
    Id_Produto: string
}

const ProdutoPage = (props: RouteComponentProps<Props>) => {
    const [product, setProduct] = useState<Produto>();

    useEffect(() => {
        api.get(`Produto/${props.match.params.Id_Produto}`).then(response => {
            setProduct(response.data[0]);
        });
    }, []);

    let vetor: any[] = [];
    let vetorPromo: any[] = [];

    product?.vendedores?.map(vendedor => {
        vetor[vendedor.Id_Vendedor] = <label htmlFor="vendedor">R$ {vendedor.Valor}</label>;
        product.promo?.forEach(function (element, index, array) {
            if(vendedor.Id_Vendedor === element.Id_Vendedor) {
                vetor[element.Id_Vendedor] = <label className="promo" htmlFor="vendedor">R$ {vendedor.Valor}</label>;
                vetorPromo[element.Id_Vendedor] = <label htmlFor="vendedor">R$ {element.Valor2}</label>;       
            }
        })
    });

    return (
        <div id="Product">
            <Header />
            <div className="wrapData">
                <div id="img-box">
                    <img src={product?.ImageUrl} alt={product?.Nome} />
                </div>
                <div id="info-products">
                    <h1> {product?.Nome} </h1>
                    {
                        product?.vendedores?.map(vendedor => {
                            return (
                                <div id="radio">
                                    <div id="info-principal">
                                        <input type="radio" id="vendedor" name="vendedor" value={vendedor.RazaoSocial} />
                                        <label htmlFor="vendedor">{vendedor.RazaoSocial}</label>
                                    </div>
                                    <div id="info-preco">
                                        {vetor[vendedor.Id_Vendedor]}
                                        {vetorPromo[vendedor.Id_Vendedor]}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <span className="buyButton">Comprar</span>
                </div>
            </div>
            <p>{product?.Descricao}</p>
        </div >
    )
}

export default ProdutoPage;