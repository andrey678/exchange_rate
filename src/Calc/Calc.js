import React from 'react';
import './Calc.css';


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }

  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };

  }
  calcRate = (e) => {
    e.preventDefault();
    // Получаем элементы формы в коллекции
    let elements = e.target.elements;
    // Получаем значения элементов формы по их атрибутам name
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    // Записываем в state значение result
    this.setState({ result: (countCurrency / this.state.rate[typeCurrency]) });
  }
  render() {

    return (
      <div className='calculator'>
        <h3> Калькулятор обмена</h3>
        <div className="block">
          <div>Я хочу</div>
          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="count-currency" />
              <select name="type-currency" id="">

                {Object.keys(this.props.rate).map((currencyName, index) =>
                (
                  <option key={currencyName} value={currencyName}>{currencyName}</option>
                )
                )}
              </select>
              <input type="submit" defaultValue='calc' />
            </form>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>EUR {this.state.result.toFixed(2)}</li>

            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Calc;
