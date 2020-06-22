import React,  { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';

const transactions = [

    { amount: 500, desc: 'cash' },
    { amount: -400, desc: 'loan' },
    { amount: 5000, desc: 'mobile' },
]


export const TransitionContext = createContext(transactions);



export const TransactionProvider = ({children }) => {

    const [state, dispatch] = useReducer(TransactionReducer, transactions);

    function addTransaction(transObj) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                amount: transObj.amount,
                desc: transObj.desc,

            }

        })
    }
    return (
        <TransitionContext.Provider value={{
            transaction: state,
            addTransaction
        }

        }>

            {children}
        </TransitionContext.Provider>
    )
}
