import { Button } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function CoralBtnIcon(props) {
    return (
        <Button
        onClick={props.onClick} 
        variant={props.type} 
        startIcon={props.icon}
        endIcon={props.endIcon} 
        sx={{ margin: 0, 
            paddingY: 0, 
            paddingX: 3, 
            borderRadius: 1, 
            maxHeight: 30, 
            minWidth: 120,
         }}
         color={props.color}>{props.label}</Button>
    )
}

CoralBtnIcon.defaultProps = {
    color: 'primary'
}

CoralBtnIcon.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.element,
    color:PropTypes.string,
    endIcon:PropTypes.element,
    onClick:PropTypes.func
}

export default CoralBtnIcon