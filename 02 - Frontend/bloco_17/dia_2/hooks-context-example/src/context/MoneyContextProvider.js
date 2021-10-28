import React, { useState } from 'react';
import moneyContext from './moneyContext';

const MoneyContextProvider = ({ children }) => {
  const [money, setMoney] = useState(1000000);

  const handleSpendMoney = () => {
    setMoney(prevMoney => prevMoney - 100);
  }

  return (
    <moneyContext.Provider value={ {money, handleSpendMoney} }>
      { children }
    </moneyContext.Provider>
  )

}

export default MoneyContextProvider;
