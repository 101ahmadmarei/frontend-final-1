import React, { useState } from 'react'
// import './textInput.css'
import { IconButton, InputAdornment, InputBase, SvgIcon } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ReactComponent as SearchIcon } from '../../static/icons/search.svg';
import { useSearchParams } from 'react-router-dom';

const style = {
    backgroundColor: '#F1F1F1',
    borderRadius: '5px',
    width: '100%',
    padding: '5px',
}

function TxtInput({ label, placeholder, type, width = '100%', isPassword = false, isSearch = false, register, value, onChange ,press }) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const [tValue,setTValue] = useState('')

    return (
        <div style={{ width: width }}>
            {/* <label for={label}>{label}</label> */}
            {/* <input type={type} id={label} name={label} placeholder={label} style={{backgroundColor:'#F1F1F1'}}></input> */}
            <div>
                <label htmlFor={label} style={{ fontSize: 14, fontWeight: 400 }}>{label}</label>
            </div>
            <InputBase
                onChange={onChange}
                value={value}
                id={label}
                placeholder={placeholder}
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

                startAdornment={
                    isSearch ?
                        <InputAdornment position="start">
                            {/* <AccountCircle /> */}
                            <SvgIcon>
                                <SearchIcon />
                            </SvgIcon>
                        </InputAdornment>
                        : <></>
                }

                {...register}
                onKeyDown={press}
            />
        </div>
    )
}

export default TxtInput