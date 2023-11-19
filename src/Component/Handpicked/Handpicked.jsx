import React from 'react';
import styled from 'styled-components';
import { useCategories } from '../../API/getCategories';
import { useNavigate } from 'react-router';
const HandpickedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #1B4B66;
`;
const HandpickedTitle = styled.h1`
    color: #FFF;
    font-size: 34px;
    font-weight: 600;
    line-height: 44px;
    margin-bottom: 32px;
    padding-top: 32px;
    padding-left: 20px;
`;
const HandSection = styled.div`
width:100%;
padding:20px;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 30px;
@media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

`;
const ImageContainer = styled.div`
position:relative;
    height: 300px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #C4C4C4;
`;
const ImageTitle = styled.div`
    color: #171520;
    font-size: 24px;
    font-weight: 600;
    position: absolute;
    bottom:10px;
    left: 10px;
    // padding: 270px 101px 16px 16px;
`;
const Image = styled(ImageContainer)`
    background-image: url(${props => props.imageUrl}) ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
const Handpicked = () => {

    const categoriesQuery = useCategories(0, 4);
    const navigate = useNavigate();

    const handleHandPicked = (id) => {
        navigate(`/products?hand_picked=true&category_id=${id}&offset=0&limit=20&type=HandPicked`);
    }

    if (categoriesQuery.isLoading) return <div>Loading...</div>
    if (categoriesQuery.error) {
        return <div>{categoriesQuery.error.message}</div>
    }

    return (
        <HandpickedContainer>
            <HandpickedTitle>Handpicked Collections</HandpickedTitle>
            <HandSection>
                {categoriesQuery.data.data.categories.map((categoreis, index) => {
                    return <Image key={index} imageUrl={categoreis.img} onClick={() => {handleHandPicked(categoreis.id)}}>
                        <ImageTitle>{categoreis.name}</ImageTitle>
                    </Image>
                })}
            </HandSection>
        </HandpickedContainer>
    );
};
export default Handpicked;
