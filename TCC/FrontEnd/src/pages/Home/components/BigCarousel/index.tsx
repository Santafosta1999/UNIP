import React, { useState } from 'react';
import Products from '../../../../data';

import Produto from '../../../../data';

import IconLeft from '../../../../icons/icon-left.svg';
import IconRight from '../../../../icons/icon-right.svg';


import './style.css';


const BigCarousel = () => {

  const [BigX, setBigX] = useState(0);
  const goBigLeft = () => {
    BigX === 0 ? setBigX(-1000 * (Products.length)) : setBigX(BigX + 100);
  }
  const goBigRight = () => {
    BigX === -100 * (Products.length - 1)  ? setBigX(0) : setBigX(BigX - 100);
  }

  setTimeout(goBigRight, 8000);

  return (
    <>
      <div className="big-carousel">
        <button className="button-BigCarousel" id="goBigLeft" onClick={goBigLeft}>
          <img src={IconLeft} alt="Seta para esquerda"/>
        </button>
        <ul>
          {
            Produto.map(products => {
              return(<img alt="Imagem" src={products.image_url}style={{ transform: `translateX(${BigX}%)` }}></img>)
            })          
          }
        </ul>
        <button className="button-BigCarousel" id="goBigRight" onClick={goBigRight}>
          <img src={IconRight} alt="Seta para right"/>
        </button>
      </div>
    </>
  )
}

export default BigCarousel;