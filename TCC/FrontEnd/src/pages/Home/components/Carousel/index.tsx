import React, { useState, useEffect } from 'react';
import SingleProduct from '../../components/SingleProduct';

import api from '../../../../services/api';

import IconLeft from '../../../../icons/icon-left.svg';
import IconRight from '../../../../icons/icon-right.svg';

import Produto from '../../../../models/Produto';

import './style.css';

interface Props {
  Busca: String,
  Text: String,
}

const Carousel = (props: Props) => {

  const [count, setCount] = useState(0);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    switch (props.Busca) {
      case 'Promocao':
        api.get('Promocao').then(response => {
          setProdutos(response.data);
          setCount(response.data.length);
        });
        break;
      case 'MaisVendidos':
        api.get('MaisVendidos').then(response => {
          setProdutos(response.data);
          setCount(response.data.length);
        });
        break;
      case 'All':
        api.get('All').then(response => {
          setProdutos(response.data);
          setCount(response.data.length);
        });
        break;
    }
  }, []);

  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(0) : setX(x + 840);
  }
  const goRight = () => {
    x === -840 * (count / 8) ? setX(-840 * (count / 8)) : setX(x - 840);
    console.log(x);
  }

  return (
    <>
      <h2 className="Section-Title">{props.Text}</h2>
      <div className="carousel">
        <button className="button-carousel" id="goLeft" onClick={goLeft}>
          <img src={IconLeft} alt="Seta para esquerda" />
        </button>
        <ul>
          {
            produtos.map((products: Produto) => {
              return (<li style={{ transform: `translateX(${x}%)` }}><SingleProduct Produto={products} /></li>)
            })
          }
        </ul>
        <button className="button-carousel" id="goRight" onClick={goRight}>
          <img src={IconRight} alt="Seta para right" />
        </button>
      </div>
    </>
  )
}

export default Carousel;




