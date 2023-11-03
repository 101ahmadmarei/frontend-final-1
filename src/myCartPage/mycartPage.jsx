import React from 'react'
import ItemTable from '../itemTable/ItemTable'
import Summary from '../summary/Summary'
import './myCartPage.css'

function MycartPage() {
  return (
    <div className='my-cart-page'>
        <ItemTable/>
        <Summary/>
    </div>
  )
}

export default MycartPage