import React, { useState } from 'react'
// import './textInput.css'
import { IconButton, InputAdornment, InputBase } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';

const style = {
    backgroundColor: '#F1F1F1',
    borderRadius: '5px',
    width: '100%',
    padding: '5px',
}

function TxtInput({ label, type, width = '100%', isPassword = false }) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <div style={{ width: width }}>
            {/* <label for={label}>{label}</label> */}
            {/* <input type={type} id={label} name={label} placeholder={label} style={{backgroundColor:'#F1F1F1'}}></input> */}
            <div>
                <label htmlFor={label} style={{ fontSize: 14, fontWeight: 400 }}>{label}</label>
            </div>
            <InputBase 
            id={label} 
            placeholder={label} 
            style={style} 
            type={showPassword ? 'text' : type}
                endAdornment={
                    isPassword ?
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        : <></>
                }
            />
        </div>
    )
}

export default TxtInput