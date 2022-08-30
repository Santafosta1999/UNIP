import React from 'react';
import './style.css';

import Header from '../../pages/Components/Header';
import Carousel from './components/Carousel';
import BigCarousel from './components/BigCarousel';

const Home = () => {

    return (
        <>
            <div id="Home">
                <Header />
                <BigCarousel />
                <Carousel Busca="Promocao" Text="Promoção" />
                <Carousel Busca="MaisVendidos" Text="Mais Comprados" />
                <Carousel Busca="All" Text="Todos os Produtos" />
            </div>
        </>
    )
}

export default Home;