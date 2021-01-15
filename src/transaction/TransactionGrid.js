import React from 'react'
import TransactionItem from './TransactionItem'
import Loading from '../ui/Loading'
const TransactionGrid = ({items, isLoading}) => {
    return isLoading ? <Loading/> : 
    <div className="row">
        {items.map((item, key) => (
            <div className="col s12 m4">
                <TransactionItem key={key} item={item}></TransactionItem>
            </div>
            
        ))}
    </div>
}

export default TransactionGrid
