import React from 'react'
import './orderSummary.css'

function OrderSummary() {
  return (
    <div>
        <div className='order-summary-row'>
            <p className='order-summary-title' style={{color:'#626262'}} >sub Total</p>
            <p className='order-summary-data'>$119.69</p>
        </div>

        <div className='order-summary-row'>
            <p className='order-summary-title' style={{color:'#626262'}}>Discount</p>
            <p className='order-summary-data'>-$13.40</p>
        </div>

        <div className='order-summary-row'>
            <p className='order-summary-title' style={{color:'#626262'}}>Delivery Fee</p>
            <p className='order-summary-data'>-$0.00</p>
        </div>

        <div className='order-summary-row'>
            <p className='order-summary-title' style={{fontWeight:700}}>Grand total</p>
            <p className='order-summary-data' style={{fontWeight:700}}>$106.29</p>
        </div>
    </div>
  )
}

export default OrderSummary