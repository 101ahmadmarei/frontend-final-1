import React from 'react'
import './itemSummary.css'

function ItemSummary() {
  return (
    <div className='item-summary-container'>

        <div className='image-container'>
            <img className='image' src={require('../../static/images/bag.jpg')} alt='bag' width={'100%'} height={'100%'}/>
        </div>

        <div className='item-summary-data'>
            <h1>coach</h1>
            <p>Leather coach Bag</p>
            <p>Qty- 1</p>
        </div>
    </div>
  )
}

export default ItemSummary