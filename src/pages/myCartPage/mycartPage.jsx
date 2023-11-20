import React from 'react'
import ItemTable from '../../Component/itemTable/ItemTable'
import Summary from '../../Component/summary/Summary'
import './myCartPage.css'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import PageHeader from '../../Component/pageHeader/PageHeader'

const MyCartContainer = styled.div`
padding: 30px;
`;

const MyCart = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 30px;
`;
function MycartPage() {
  return (
    <MyCartContainer>
      <PageHeader title={'My Cart'}/>
      <MyCart>
        <ItemTable />
        <Summary />
      </MyCart>
    </MyCartContainer>
  )
}

export default MycartPage