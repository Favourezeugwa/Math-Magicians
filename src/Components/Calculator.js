import React from 'react';
import calculate from '../Logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator-container">
        <input type="text" className="calculator-screen" value={(total || '') + (operation || '') + (next || '')} />
        <div className="calculator-keys">
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>AC</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>+/-</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>%</button>
          <button type="button" className="btn-orange" onClick={this.handleClick}>÷</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>7</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>8</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>9</button>
          <button type="button" className="btn-orange" onClick={this.handleClick}>x</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>4</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>5</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>6</button>
          <button type="button" className="btn-orange" onClick={this.handleClick}>-</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>1</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>2</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>3</button>
          <button type="button" className="btn-orange" onClick={this.handleClick}>+</button>
          <button type="button" className="btn-lightgrey item0" onClick={this.handleClick}>0</button>
          <button type="button" className="btn-lightgrey" onClick={this.handleClick}>.</button>
          <button type="button" className="btn-orange" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
