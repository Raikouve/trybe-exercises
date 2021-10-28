import React, { useContext } from 'react';
import moneyContext from '../context/moneyContext';

const Son = () => {
  const { money, handleSpendMoney } = useContext(moneyContext);

  return (
    <div>
      <h4>Filho</h4>
      <p>Eu tenho {money} reais para gastar.</p>
      <button onClick={handleSpendMoney}>Gastar dinheiro</button>
    </div>
  );
};

export default Son;
