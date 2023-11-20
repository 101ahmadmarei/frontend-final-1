import React from 'react'
import OrderSummary from '../orderSummary/orderSummary'

function Summary({ title = 'Order summary' }) {
  return (
    <div style={{width:'30%'}}>
      <h2 style={{ fontWeight: 600, fontSize: 18, margin: 0, borderBlockEnd: '1px solid #f1f1f1', }}>{title}</h2>

      <OrderSummary />
    </div>
  )
}

export default Summary