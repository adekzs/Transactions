import React from 'react'

const TransactionItem = ({item}) => {
    return (
            <div className="card-panel blue darken-4 white-text" >
                <span>FirstName: {item.FirstName}</span>< br/>
                <span>LastName: {item.LastName}</span>< br/>
                <span>Gender: {item.Gender}</span>< br/>
                <span>Payment Method: {item.PaymentMethod}</span>< br/>
            </div>
          
    )
}

export default TransactionItem;
