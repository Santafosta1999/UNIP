import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => {
  return (
    <header className="header-mercadon">
      <div id="title">
        <Link className="home" to="/"><h1>MERCAD<span>ON</span></h1></Link>
      </div>
      <div id="search-box">
        <input
          type="text"
          name="search"
          id="search"
        />
      </div>
      <button id="search-button">
        Buscar
      </button>
    </header>
  );
}

export default Header;