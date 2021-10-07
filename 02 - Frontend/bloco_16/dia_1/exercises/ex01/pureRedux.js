const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => { // ===> REDUCER
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
    return {
      ...state,
      index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
    };
    case 'RANDOM_COLOR':
      return {
        ...state,
        index: Math.floor(Math.random() * 5.9),
      }
    default:
      return state;
  }
}

const store = Redux.createStore(reducer); // ===> CRIANDO A STORE

document.getElementById('next').addEventListener('click', () => { 
store.dispatch({ type: 'NEXT_COLOR' }); // ===> ACTION E DISPATCH
});

document.getElementById('previous').addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' }); // ===> ACTION E DISPATCH
});

document.getElementById('random-color').addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' }); // ===> ACTION E DISPATCH
})

store.subscribe(() => {
  const { colors, index } = store.getState();
  console.log(store.getState());
  document.querySelector('#value').innerHTML = colors[index];
  document.querySelector('#container').style.backgroundColor = colors[index];
})
