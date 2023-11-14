import React from 'react'
import NewArr from '../../Component/NewArrivals/NewArr';
import Handpicked from '../../Component/Handpicked/Handpicked';
import Brand from '../../Component/Brand/Brand';
import Carousal from '../../Component/Carousal/Carousal';
import Makeup from '../../Component/Makeup/Makeup';



function HomePage() {
    return (
        <>
            <Carousal />
            <NewArr />
            <Handpicked />
            <Brand />
            <Makeup />
        </>

    )


}

export default HomePage;