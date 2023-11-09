import React from 'react'
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import NewArr from '../../Component/NewArrivals/NewArr';
import Handpicked from '../../Component/Handpicked/Handpicked';
import Brand from '../../Component/Brand/Brand';
import Carousal from '../../Component/Carousal/Carousal';
import Makeup from '../../Component/Makeup/Makeup';



function HomePage() {
    return (
        <div className='Home-page'>
            <Header />
            <Carousal />
            <NewArr />
            <Handpicked />
            <Brand />
            <Makeup />
            <Footer />

        </div>

    )


}

export default HomePage;