import React from 'react';

import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {

  render() {
    return (

      <div className="header-nav">
        <div className="container">
          <nav>
            <Link to="/" className='nav-link'>Главная</Link>
            <Link to="/offices" className='nav-link'>Пункты обмена</Link>
            <Link to="/contacts" className='nav-link'>Контакты</Link>
          </nav>
        </div>
      </div>

    );
  }

}

export default Nav;
