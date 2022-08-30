import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Produto from '../../../../models/Produto';

interface Props{
    Produto: Produto
}

const SingleProduct = (props: Props) => {
    return(
        <Link id="SingleProduct" to={`Produto/${props.Produto.Id_Produto}`} >
            <img src={props.Produto.ImageUrl} alt={props.Produto.Nome} />
            <span>{props.Produto.Nome}</span>
            <span>R$ {props.Produto.Valor}</span>
        </Link>
    )
}

export default SingleProduct;