const ESTADO_INICIAL = {
  number: 0,
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        number: state.number + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        number: state.number - 1,
      }
    default:
      return state;
  }
}

store = Redux.createStore(reducer);

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});

store.subscribe(() => {
  const { number } = store.getState();
  document.getElementById('number').innerHTML = number;
})
