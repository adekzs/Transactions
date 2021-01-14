import React from 'react'
import TransactionItem from './TransactionItem'

const TransactionGrid = ({items, isLoading}) => {
    return isLoading ? <h1>Loading...</h1> : 
    <div className="row">
        {items.map(item => (
            <div className="col s12 m4">
                <TransactionItem key={item.LastLogin} item={item}></TransactionItem>
            </div>
            
        ))}
    </div>
}

export default TransactionGrid
