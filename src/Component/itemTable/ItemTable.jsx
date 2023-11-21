import React, { useMemo } from 'react'
import './ItemTable.css'
import ItemRow from '../itemRow/ItemRow'
import { Typography } from '@mui/material'
import { useMyCart } from '../../API/getMyProducts';

function ItemTable({orderID}) {

    const myCartQuery = useMyCart();


    

    const productsRows = useMemo(()=> {
        return myCartQuery.data?.data?.[0].order_products.map((product, index) =>{
            return <ItemRow key={index} product={product} orderId={myCartQuery.data.data?.[0].id}/>
        })
    },[myCartQuery.data])


    if (myCartQuery.isLoading) return <div>Loading...</div>
    if (myCartQuery.error) {
      return <div>{myCartQuery.error.message}</div>
    }


    return (
        <div className='Table-container'>
            <div className='Table-header'>
                <p className='product-name' style={{color:'#626262'}}>Product name</p>
                <div className='product-details'>
                    <p style={{color:'#626262'}}>Price</p>
                    <p style={{color:'#626262'}}>Qty</p>
                    <p style={{color:'#626262'}}>Subtotal</p>
                </div>
            </div>
            {!!productsRows && productsRows.length > 0 && productsRows}
            {(!productsRows || productsRows.length === 0 ) && <Typography sx={{color:'primary.main', fontSize:16, fontWeight:600, textAlign:'center', paddingTop:'30px'}}>No product found</Typography>}
        </div>
    )
}

export default ItemTable