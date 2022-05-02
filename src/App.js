import React from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="site">
        <Header />

        <div className="container">
          <main>
            <h3> Курс валют на 2 мая 2022</h3>
            <div className="flex-container">
              <div className="block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Kr</div>
                <div className="currency-out">1200 Kr</div>
              </div>
              <div className="block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Kr</div>
                <div className="currency-out">1200 Kr</div>
              </div>
              <div className="block flex-item">
                <div className="currency-name">USD</div>
                <div className="currency-in">1500 Kr</div>
                <div className="currency-out">1200 Kr</div>
              </div>
            </div>
            <h3> Калькулятор обмена</h3>
            <div className="block">
              <div>Я хочу</div>
              <div><label><input type="radio" name="radio" defaultValue="0" />купить</label></div>
              <div><label><input type="radio" name="radio" defaultValue="1" />продать</label></div>
              <div>
                <input type="number" defaultValue="150" />
                <select name="" id="">
                  <option value="USD">USD</option>
                  <option value="RUB">RUB</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <div>
                <h4>Результат</h4>
                <ul className="calc-res">
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                </ul>
              </div>
            </div>
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">
              На нашем сайте мы используем cookie для сбора информации технического характера.<br /> в частности, для
              персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего местоположения.&nbsp;
              <a className="btn btn-primary btn-sm">OK</a></div>
          </div>
        </div>
        <Footer />

      </div>
    );
  }

}

export default App;
