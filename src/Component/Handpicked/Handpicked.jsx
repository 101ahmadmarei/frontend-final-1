import React from 'react';
import styled from 'styled-components';
 
  const HandpickedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #1B4B66;
`;
 
const HandpickedTitle = styled.h1`
    color: #FFF;
    font-family: Inter;
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
    display: flex;
    background: #1B4B66;
    justify-content: center;
`;

const CategoriesSection = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 46px;
    padding: 25px;
`;

const ImageContainer = styled.div`
    width: 318px;
    height: 318px;
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
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    padding: 270px 101px 16px 16px;
`;

const PersonalImage = styled(ImageContainer)`
    background: url("../assets/personalcare.png") lightgray 10% / cover no-repeat;
`;

const HandpickedImage = styled(ImageContainer)`
    background: url("../assets/Handbags.png") lightgray 10% / cover no-repeat;
`;

const WatchImage = styled(ImageContainer)`
    background: url("../assets/wristwatches.png") lightgray 10% / cover no-repeat;
`;

const GlassImage = styled(ImageContainer)`
    background: url("../assets/sunglassess.png") lightgray 10% / cover no-repeat;
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
const PersonalImage = styled(ImageContainer)`
    background-image: url(${require("../../static/images/bag.jpg")}) ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
const HandpickedImage = styled(ImageContainer)`
    background-image: url(${require("../../static/images/bag.jpg")}) ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
const WatchImage = styled(ImageContainer)`
    background-image: url(${require("../../static/images/bag.jpg")}) ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
const GlassImage = styled(ImageContainer)`
    background-image: url(${require("../../static/images/bag.jpg")}) ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
 const Handpicked = () => {
    return (
        <HandpickedContainer>
            <HandpickedTitle>Handpicked Collections</HandpickedTitle>
            <HandSection>
                 <CategoriesSection>
                      <PersonalImage>
                        <ImageTitle>Personal Care</ImageTitle>
                    </PersonalImage>
                    <HandpickedImage>
                        <ImageTitle>Handbags</ImageTitle>
                    </HandpickedImage>
                    <WatchImage>
                        <ImageTitle>Wrist Watches</ImageTitle>
                    </WatchImage>
                    <GlassImage>
                        <ImageTitle>Sun Glasses</ImageTitle>
                    </GlassImage>
                 </CategoriesSection>
              </HandSection>
        </HandpickedContainer>
    );
};
 
export default Handpicked;

 
 