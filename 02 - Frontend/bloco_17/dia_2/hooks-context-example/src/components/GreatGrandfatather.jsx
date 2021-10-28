import React from 'react'
import Grandfather from './Grandfather'
import MoneyContextProvider from '../context/MoneyContextProvider';

const GreatGrandFather = () => {
    return (
      <MoneyContextProvider>
        <div>
          <h1>Bisavô</h1>
          <Grandfather />
        </div>
      </MoneyContextProvider>
    )
  }

export default GreatGrandFather;
