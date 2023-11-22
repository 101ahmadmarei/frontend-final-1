import React from 'react'
import NewAddress from '../../Component/newAdress/NewAddress'
import CoralAccordion from '../../Component/CoralAccordion/CoralAccordion'
import CheckoutSummary from '../../Component/checkoutSummary/CheckoutSummary'
import Summary from '../../Component/summary/Summary'
import './checkOutPage.css'
import PageHeader from '../../Component/pageHeader/PageHeader'
import styled from 'styled-components'

const Container = styled.div`
padding:30px;
`

function CheckOutPage() {
    return (
<<<<<<< HEAD
        <div className='checkout-page'>
            <div className='accordion-container'>
                <CoralAccordion summary={'Add New Address'} details={<NewAddress />} />
                <CoralAccordion summary={'Payment'} details={<NewAddress />} />
            </div>

            <div className='summary-container'>
                <CheckoutSummary />
                <div style={{ paddingTop: 40 }}>
                    <Summary title='Order Details' />
=======
        <Container>
            <PageHeader title={'CheckOut'} />
            <div className='checkout-page'>
                <div className='accordion-container'>
                    <CoralAccordion summary={'Add New Address'} details={<NewAddress />} />
                    <CoralAccordion summary={'Payment'} details={<NewAddress />} />
>>>>>>> ab7869b8eed640eef81ccdac397a84ac03f171c1
                </div>

                <div className='summary-container'>
                    <CheckoutSummary />
                    <div style={{ paddingTop: 40 }}>
                        <Summary title='Order Details' />
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default CheckOutPage