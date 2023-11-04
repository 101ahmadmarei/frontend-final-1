import React from 'react'
// import './textInput.css'
import { InputBase } from '@mui/material'

const style = {
    backgroundColor: '#F1F1F1',
    borderRadius: '5px',
    width: '100%',
    padding: '5px',
}

function TxtInput({ label, type }) {
    return (
        <>
            {/* <label for={label}>{label}</label> */}
            {/* <input type={type} id={label} name={label} placeholder={label} style={{backgroundColor:'#F1F1F1'}}></input> */}
            <div>
                <label htmlFor={label} style={{fontWeight:500}}>{label}</label>
            </div>
            <InputBase id={label} placeholder={label} style={style} type={type}/>
        </>
    )
}

export default TxtInput