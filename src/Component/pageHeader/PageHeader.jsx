import { Typography, useTheme } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CoralBtnIcon from '../CoralBtnIcon/CoralBtnIcon';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Container = styled.div`
display:flex;
justify-content: space-between;
`;


function PageHeader(props) {
    
  return (
    <Container>
        <Typography variant='h1' component='h1' sx={{fontSize:24, fontWeight:600, color:'primary.main'}}>{props.title}</Typography>
        <CoralBtnIcon label='Logout' type={'outlined'} icon={<LogoutOutlinedIcon/>}/> 
    </Container>
  )
}

PageHeader.propTypes = {
    title: PropTypes.string
}

export default PageHeader