import React from 'react'
import NewAddress from '../../Component/newAdress/NewAddress'
import CoralAccordion from '../../Component/CoralAccordion/CoralAccordion'
import CheckoutSummary from '../../Component/checkoutSummary/CheckoutSummary'
import Summary from '../../Component/summary/Summary'
import './checkOutPage.css'

function CheckOutPage() {
    return (
        <div className='checkout-page'>
            <div className='accordion-container'>
                <CoralAccordion summary={'Add New Address'} details={<NewAddress />} />
                <CoralAccordion summary={'Payment'} details={<NewAddress />} />
            </div>

            <div className='summary-container'>
                <CheckoutSummary />
                <div style={{ paddingTop: 40 }}>
                    <Summary title='Order Details' />
                </div>

            </div>
        </div>
    )
}

export default CheckOutPage