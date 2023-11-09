import React from 'react'
import ItemTable from '../../Component/itemTable/ItemTable'
import Summary from '../../Component/summary/Summary'
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