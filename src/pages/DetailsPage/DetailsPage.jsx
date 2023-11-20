import React from 'react'
import BasicTab from '../../Component/BasicTab/BasicTab';
import DetailsCarosel from '../../Component/DetailsCarosel/DetailsCarosel';
import DetailsDescription from '../../Component/DetailsDescription/DetailsDescription';
import styled from 'styled-components'
import "./DetailsPage.css";


const detailsPage = styled.div`
padding: 0 15px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const container = styled.div`
display:flex;
 `;


function DetailsPage() {
    return (
        <detailsPage>

            <container>
                <div><DetailsCarosel /></div>
                <div><DetailsDescription /></div>

            </container>
            <BasicTab />



        </detailsPage>

    )


}

export default DetailsPage();