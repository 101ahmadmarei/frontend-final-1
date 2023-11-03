import React from 'react'
import ItemSummary from '../itemSummary/itemSummary'
import './ItemRow.css'

function ItemRow({ price = 54.99, qty = 1 }) {
    return (
        <div className='item-row-container'>
            <ItemSummary />
            <div className='item-row'>
                <div className='item-row-data'>
                    <p>{'$'+price}</p>
                    <p>{qty}</p>
                    <p>{'$'+ (price * qty)}</p>
                </div>

                <div className='item-row-functions'>
                    <a style={{ color: '#1B4B66' }}>Add to wishlist</a>
                    <a style={{ color: '#B00020' }}>Remove</a>
                </div>
            </div>
        </div>
    )
}

export default ItemRow