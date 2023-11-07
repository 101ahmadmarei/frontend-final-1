import { Grid } from '@mui/material'
import React from 'react'
import TxtInput from '../textInput/textInput'

function NewAddress() {
    return (
        <Grid container columnSpacing={4}>
            <Grid item xs={6}><TxtInput label={'First name'} type={'text'} /></Grid>
            <Grid item xs={6}><TxtInput label={'Last name'} type={'text'} /></Grid>
            <Grid item xs={6}><TxtInput label={'Mobile number'} type={'number'} /></Grid>
            <Grid item xs={6}><TxtInput label={'E-mail'} type={'email'} /></Grid>
            <Grid item xs={6}><TxtInput label={'Location'} type={'text'} /></Grid>
        </Grid>
    )
}

export default NewAddress