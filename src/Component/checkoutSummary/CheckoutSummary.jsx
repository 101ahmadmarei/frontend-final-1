import React, { useMemo } from 'react'
import ItemSummary from '../itemSummary/itemSummary'
import './CheckoutSummary.css'
import { useMyCart } from '../../API/getMyProducts'

function CheckoutSummary() {

    const myCartQuery = useMyCart();

    const productsRows = useMemo(()=> {
        return myCartQuery.data?.data?.[0].order_products.map((product, index) =>{
            return <ItemSummary key={index} product={product}/>
        })
    },[myCartQuery.data])


    return (
        <div>
            <h2 style={{ fontWeight: 600, fontSize: 18,  borderBlockEnd: '1px solid #f1f1f1', }}>Order Summary</h2>
            {!!productsRows && productsRows.length > 0 && productsRows}
        </div>
    )
}

export default CheckoutSummary