import React from 'react';
import SearchBar from '../SearchBar/'

import './header.scss';

const Header = () => (
  <div className="header-bg">
    <div className="header-bg__logo">
      <a href={`http://${window.location.host}`}>
        <img
          className="header-bg__logo--img"
          src="https://res.cloudinary.com/walsam/image/upload/v1569138453/logo.png"
          alt="logo"
        />
      </a>
    </div>
    <div>
      <div className="header-bg__rider">
        <div>
          <img
            className="header-bg__rider--logo"
            src="https://res.cloudinary.com/walsam/image/upload/v1569138453/logo.png"
            alt="logo"
          />
        </div>
        <div>
          <h1 className="header-bg__rider--text">Directory</h1>
        </div>
      </div>
      <div className="header-bg__rider--sub">
        <p>Find your favourite Characters, Films, Species, Starships, and Planets</p>
      </div>
      <SearchBar />
    </div>
  </div>
)

export default Header;
