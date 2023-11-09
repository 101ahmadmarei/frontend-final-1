import React from 'react'
import './ItemTable.css'
import ItemRow from '../itemRow/ItemRow'

function ItemTable({showFunctions}) {
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

            <ItemRow showFunctions={showFunctions}/>
            <ItemRow showFunctions={showFunctions}/>
        </div>
    )
}

export default ItemTable