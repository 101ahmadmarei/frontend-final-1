import React from 'react'
import ItemSummary from '../itemSummary/itemSummary'
import './CheckoutSummary.css'

function CheckoutSummary() {
    return (
        <div>
            <h2 style={{ fontWeight: 600, fontSize: 18, margin: 0, borderBlockEnd: '1px solid #f1f1f1', }}>Order Summary</h2>
            <ItemSummary/>
            <ItemSummary/>
        </div>
    )
}

export default CheckoutSummary