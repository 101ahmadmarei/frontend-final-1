import React from 'react'
import './orderSummary.css'
import { useMyCart } from '../../API/getMyProducts';

function OrderSummary() {
    const myCartQuery = useMyCart();

    if (myCartQuery.isLoading) return <div>Loading...</div>
    if (myCartQuery.error) {
        return <div>{myCartQuery.error.message}</div>
    }

    return (
        <div>
            {myCartQuery.data?.data != undefined ?
                <>
                    <div className='order-summary-row'>
                        <p className='order-summary-title' style={{ color: '#626262' }} >sub Total</p>
                        <p className='order-summary-data'>${myCartQuery.data.data[0].total_price}</p>
                    </div>

                    <div className='order-summary-row'>
                        <p className='order-summary-title' style={{ color: '#626262' }}>Discount</p>
                        <p className='order-summary-data'>-${myCartQuery.data.data[0].total_discount}</p>
                    </div>

                    <div className='order-summary-row'>
                        <p className='order-summary-title' style={{ color: '#626262' }}>Delivery Fee</p>
                        <p className='order-summary-data'>-${myCartQuery.data.data[0].delivery_fees}</p>
                    </div>

                    <div className='order-summary-row'>
                        <p className='order-summary-title' style={{ fontWeight: 700 }}>Grand total</p>
                        <p className='order-summary-data' style={{ fontWeight: 700 }}>${myCartQuery.data.data[0].grand_total}</p>
                    </div>
                </> :
                <></>
            }
        </div>
    )
}

export default OrderSummary