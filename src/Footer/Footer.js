import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  render() {
    return (

      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <h1 className="footer-title">2022 &copy; Currency Exchange Rate</h1>
            <p className="footer-subtitle">All Rights Reserved</p>
            <div className="flex-container">
              <ul className="flex-item">
                <li><a href="/sitemap/" tooltip="Карта сайта">Карта сайта</a></li>
                <li><a href="/sitemaps.xml" target="_blank" tooltip="Google sitemap">Google Sitemap</a></li>
              </ul>
              <div className="flex-item">
                <ul className="list-unstyled">
                  <li><a href="/contact/" tooltip="Контакты">Контакты</a></li>
                  <li><a href="/d">Гарантии</a></li>
                  <li><a href="/s">О сервисе</a></li>
                  <li><a href="/o">Условия возврата</a></li>
                  <li><a href="/p">Соглашение о использовании сервиса</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;
