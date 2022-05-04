import React from 'react';
import './Rate.css';

import Calc from '../Calc/Calc';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      currencyRate: {}
    }
    this.currency = ['EUR', 'RUB', 'CAD', 'PHP'];

  }

  getRate = () => {
    // Делаем запрос на сервис openexchangerates.org

    fetch("https://openexchangerates.org/api/latest.json?app_id=88d7caa2e2ed40ddb92b5a03965c487d")
      .then(data => data.json())
      .then(data => {

        //Устанавливаем дату
        this.setState({ date: new Date().setTime(data.timestamp * 1000) });
        //Получаем курс выбранных нами валют из массива this.currency
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];

        }
        // Записываем в state данные курса валют
        this.setState({ currencyRate: result });
      });

  }
  componentDidMount() {
    this.getRate();
  }
  render() {
    let formatter = new Intl.DateTimeFormat("ru", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return (

      <div className='rate'>
        <h3> Курс валют на {formatter.format(this.state.date)}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((currencyName, index) =>
          (
            <div className="block flex-item" key={currencyName}>
              <div className="currency-name">{currencyName}</div>
              <div className="currency-in">{this.state.currencyRate[currencyName].toFixed(2)}*</div>
              <p className="currency-out">*Можно купить за 1 USD</p>
            </div>
          )
          )}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>

    );
  }

}

export default Rate;
