import React from 'react'
import MyOrderNavigation from '../MyOrderNavigation/MyOrderNavigation'
import OrderTable from '../OrderTable/OrderTable'

function MyOrders() {
  return (
    <div>
        <MyOrderNavigation/>
        <OrderTable/>
    </div>
  )
}

export default MyOrders