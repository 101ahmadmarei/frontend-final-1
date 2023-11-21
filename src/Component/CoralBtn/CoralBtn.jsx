import { Button } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function CoralBtn(props) {
  return (
    <Button
    type='submit' 
    variant={props.type} 
    sx={{margin:0, paddingY:0,paddingX:3, borderRadius:1 , maxHeight: 50, minHeight: 30, minWidth:120, width:'100%', fontWeight:props.fontWeight}}
    onClick={props.click} 
    color={props.color}
    >
      {props.label}</Button>
  )
}

CoralBtn.defaultProps = {
  color: 'primary',
  fontWeight:400
}

CoralBtn.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    click: PropTypes.func,
    color: PropTypes.string,
    fontWeight: PropTypes.number
}

export default CoralBtn