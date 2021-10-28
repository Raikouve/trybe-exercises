import React, { Component } from 'react'
import Grandfather from './Grandfather'
import moneyContext from '../context/moneyContext';
const { Provider } = moneyContext;

export default class GreatGrandfatather extends Component {
  constructor() {
    super()

    this.handleSpendMoney = this.handleSpendMoney.bind(this);

    this.state = {
      money: 1000000,
    }
  }

  handleSpendMoney() {
    this.setState((prevState) => ({ money: prevState.money - 100 }));
  }

  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    }
    return (
      <Provider value={ contextValue }>
        <div>
          <h1>Bisavô</h1>
          <Grandfather />
        </div>
      </Provider>
    )
  }
}
