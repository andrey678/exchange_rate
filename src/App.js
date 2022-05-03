import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import Offices from './Offices/Offices';
import Contacts from './Contacts/Contacts';



class App extends React.Component {

  render() {
    return (
      <div className="site">
        <Header />
        <div className="container">
          <main>
            <Routes>
              <Route path='/' element={<Rate />} />
              <Route path='/offices' element={<Offices />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='*' element={<Rate />} />
            </Routes>
          </main>
        </div>
        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">
              На нашем сайте мы используем cookie для сбора информации технического характера.<br /> в частности, для
              персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего местоположения.&nbsp;
              <button>OK</button></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
