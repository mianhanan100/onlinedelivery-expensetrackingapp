import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';
import {TransactionProvider} from './components/context/globalContext';

function App() {
  return (
    <div className='container'>
      <TransactionProvider>
  <Header />
  <div>
    <Balance />
    <AccountSummary />
    <TransactionHistory />
    <AddTransaction />
    
  </div>
  </TransactionProvider>
    </div>
  );
}

export default App;
