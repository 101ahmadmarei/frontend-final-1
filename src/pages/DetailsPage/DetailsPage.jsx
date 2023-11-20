import React from 'react'
import BasicTab from '../../Component/BasicTab/BasicTab';
import DetailsCarosel from '../../Component/DetailsCarosel/DetailsCarosel';
import DetailsDescription from '../../Component/DetailsDescription/DetailsDescription';
import "./DetailsPage.css";





function DetailsPage() {
    return (
        <>
            <div style={{ display: 'flex', marginBottom: 55, width: '100%' }}>
                <div style={{ width: '50%', height: 605 }}><DetailsCarosel></DetailsCarosel></div>
                <div><DetailsDescription></DetailsDescription></div>

            </div>

            <BasicTab />
        </>

    )


}

export default DetailsPage();