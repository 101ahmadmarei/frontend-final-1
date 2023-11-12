import React from 'react'
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import MoreDetails from '../../Component/MoreDetails/MoreDetails';
import Productlist from '../../Component/Productlist/Productlist';
import QuentityCom from '../../Component/QuentityCom/QuentityCom';
import ShowImage from '../../Component/ShowImage/ShowImage';
import ItemDetails from '../../Component/ItemDetails/ItemDetails';




function NavigationPage() {
    return (
        <div className='Details-Page'>
            <Header />
            <ItemDetails />
            <MoreDetails />

            <Footer />

        </div>

    )


}

export default NavigationPage;