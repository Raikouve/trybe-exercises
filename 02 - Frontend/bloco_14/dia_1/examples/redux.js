  // ACTION
  const fazerLogin = (email) => ({
    type: "LOGIN",
    email});
  
  // ESTADO INICIAL
  const INIT_STATE = {
    login: false,
    email: "",
  };
  
  // REDUCER
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          login: !state.login,
          email: action.email,
        };
      default: // No switch, sempre precisamos ter um caso default!
        return state;
    }
  };
  
  // STORE
  const store = Redux.createStore(reducer);
  
  store.dispatch(fazerLogin("alguem@email.com"));
  
  console.log(store.getState());

// { login: true, email: 'alguem@email.com' }