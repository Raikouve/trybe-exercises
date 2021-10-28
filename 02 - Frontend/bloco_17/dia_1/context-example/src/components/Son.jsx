import React, { Component } from 'react'
import moneyContext from '../context/moneyContext'
const { Consumer } = moneyContext;

export default class Son extends Component {
  render() {
    return (
      <Consumer>
        {
          value => (
            <div>
            <h4>Filho</h4>
            <p>Eu tenho { value.money } reais para gastar.</p>
            <button onClick={ value.spendMoney }>Gastar dinheiro</button>
          </div>
          )
        }
      </Consumer>
    )
  }
}
