import { Button } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function CoralBtn(props) {
  return (
    <Button variant={props.type} sx={{margin:0, paddingY:0,paddingX:3, borderRadius:1 , maxHeight: 50, minHeight: 30, minWidth:120,}}>{props.label}</Button>
  )
}

CoralBtn.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string
}

export default CoralBtn