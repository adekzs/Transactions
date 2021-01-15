import React from 'react'

const TransactionItem = ({item}) => {
    return (
            <div className="card-panel blue darken-4 white-text" >
                <span>Name: {item.FirstName} {item.LastName}</span>< br/>
                <span>UserName: {item.UserName}</span>< br/>
                <span>Gender: {item.Gender}</span>< br/>
                <span>Mail: {item.Email}</span><br />
                <span>Payment Method: {item.PaymentMethod}</span>< br/>
            </div>
    )
}

export default TransactionItem;
