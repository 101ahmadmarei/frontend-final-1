import React from 'react'
import styled from 'styled-components'
import SearchItem from '../SearchItem/SearchItem';
import PropTypes from 'prop-types'


const SearchPopUpContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
function SearchPopUp(props) {

    return (
        <SearchPopUpContainer>
            {props.response.length ? props.response?.map((product) => {
                return <div style={{paddingBottom:'5px'}}><SearchItem key={Math.random()} product={product}/> </div>;
            }) : <div>There no products</div>}
            
        </SearchPopUpContainer>
    )
}

SearchPopUp.propTypes = {
    response: PropTypes.array,
}

export default SearchPopUp