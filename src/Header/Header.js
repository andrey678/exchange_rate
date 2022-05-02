import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (

      <header>
        <div className="top-bar animate-dropdown"></div>
        <div className="main-header">
          <div className="container">
            <h1 className="site-title">Currency Exchange Rate</h1>

          </div>
        </div>
        <div className="header-nav">
          <div className="container">
            <nav>
              <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Пункты обмена</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

    );
  }

}

export default Header;
