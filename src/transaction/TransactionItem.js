import React from 'react'

const TransactionItem = ({item}) => {
    return (
            <div className="card-panel blue darken-4 white-text text-bold" >
                <span><b>Name:</b> {item.FirstName} {item.LastName}</span>< br/>
                <span><b>UserName:</b> {item.UserName}</span>< br/>
                <span><b>Gender:</b> {item.Gender}</span>< br/>
                <span><b>Mail:</b> {item.Email}</span><br />
                <span><b>Payment Method:</b> {item.PaymentMethod}</span>< br/>
            </div>
    )
}

export default TransactionItem;
