import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form className='transitionform'>
                <div>
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input type='text' placeholder='Detail of Description' />    
                </div>
                <div>
                    <label htmlFor='transaction'>
                        Transaction Amount
                    </label>
                    <input type='number' placeholder='Transaction Amount'/>
                </div>
                <button>Add Transaction</button>
            </form>
        </div>
    )
}
