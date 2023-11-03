import React from 'react'
import './Summary.css'
import OrderSummary from '../orderSummary/orderSummary'

function Summary() {
  return (
    <div className='summary-container'>
        <div className='summary-header'>
            <p>Order summary</p>
        </div>

        <OrderSummary/>
    </div>
  )
}

export default Summary