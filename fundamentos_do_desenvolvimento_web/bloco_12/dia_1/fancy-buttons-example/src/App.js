import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará

    super()
    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor

    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numberOfCLicks: 0,
    }
  }
  handleClick () {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */

    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/

    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((previousState, _props) =>  ({
      numberOfCLicks: previousState.numberOfCLicks + 1
    }));
    if(this.state.numberOfCLicks % 2 === 1) {
      console.log('verde');
    }
  }
  render() {
  return (
    <div className='btn-container'>
    {/* Para LER o estado, você pode usar `this.state.chaveDoMeuEstado */}
    <button className='num-btn' onClick={this.handleClick}>{this.state.numberOfCLicks}</button>
    </div>
  )
  }
}

export default App;
