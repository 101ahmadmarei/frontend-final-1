import React from 'react'
import NewArrivals from '../../Component/NewArrivals/NewArrivals';
import Handpicked from '../../Component/Handpicked/Handpicked';
import Brand from '../../Component/Brand/Brand';
import Makeup from '../../Component/Makeup/Makeup';



function HomePage() {
    return (
        <> 
            <NewArrivals />
            <Handpicked />
            <Brand />
            <Makeup />
        </>

    )


}

export default HomePage;