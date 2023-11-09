import React from 'react'
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import Productlist from '../../Component/Productlist/Productlist';
import Carousal from '../../Component/Carousal/Carousal';
;



function HomePage() {
    return (
        <div className='Home-page'>
            <Header />
            <Carousal />
            <Productlist />
            <Footer />

        </div>

    )


}

export default HomePage;