import React from 'react';
import './Rate.css';

import Calc from '../Calc/Calc';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      currencyRate: {}
    }
    this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
    this.getRate();
  }

  getRate = () => {

    let myHeaders = new Headers();
    myHeaders.append("apikey", "K18dTs2jE17chvMiJY9ccJQ5rdyXjAe2");

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        //Устанавливаем дату
        this.setState({ date: data.date });
        //Получаем курс выбранных нами валют из массива this.currency
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
          console.log(result);
        }
        // Записываем в state данные курса валют
        this.setState({ currencyRate: result });
      });
    // .catch(error => console.log('error', error));
  }
  render() {

    return (

      <div className='rate'>
        <h3> Курс валют на {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((currencyName, index) =>
          (
            <div className="block flex-item" key={currencyName}>
              <div className="currency-name">{currencyName}</div>
              <div className="currency-in">{this.state.currencyRate[currencyName].toFixed(2)}*</div>
              <p className="currency-out">*Можно купить за 1 EUR</p>
            </div>
          )
          )}


        </div>
        <Calc rate={this.state.currencyRate}/>
      </div>

    );
  }

}

export default Rate;
