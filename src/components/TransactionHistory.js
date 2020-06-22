import React, { useContext } from 'react';
import { TransitionContext } from './context/globalContext';



export const TransactionHistory = () => {
    let {transactions} = useContext(TransitionContext);
    // let [newDesc, setDesc] = useState("");
    // let [newAmount, setAmount] = useState("");



    // const handleAddition = (event) => {
    //     event.preventDefault()
    // }

    return (
        <div>
            <h3>
                Transaction History
                
                <ul className='transactionlist'>

                    {/* {transactions.map((obj, ind) => {
                        return ( <li>
                                <span>{}</span>
                                <span>{}</span>

                            </li>

                        ) */}
                        {/* }) */}

                    {/* } */}
                    

                </ul>
            </h3>
        </div>
    )
}
