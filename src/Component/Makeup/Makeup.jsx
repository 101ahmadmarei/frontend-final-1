import React from 'react';
import styled from 'styled-components';

const MakeupWrapper = styled.div`
  width: auto;
  height: 700px;
  display: block;
  margin:0px 20px 0px 20px;
  
`;

const MakeupContainer = styled.div`
  width: auto;
  height: 400px;
  display: flex;
  padding: 68px 20px 0px 20px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.57) 100%);
`;

const MakeupComponent = styled.div`
  width: 50%;
  height: 400px;
  background-image: url(${require("../assets/complete1.png")});
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  background-blend-mode: normal;
`;

const MakeupTop = styled.div`
  width: 50%;
  height: 400px;
  background-image: url(${require("../assets/top.png")});
  background-repeat: no-repeat;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background-blend-mode: normal;
`;

const LifestyleText = styled.div`
  color: #97451F;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 41px;
  margin-top: 109px;
  position: absolute;
`;

const AccessoriesText = styled.div`
  width: 560px;
  color: #97451F;
  font-family: Inter;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 68px;
  margin-left: 41px;
  margin-top: 148px;
  position: absolute;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 228px;
  margin-top: 0;
  padding: 40px 22px 45px 22px;
  display: flex;
  gap: 40px;
`;

const LeftContainer = styled.div`
  width: 691px;
  height: 228px;
  margin-top:50px;
  border-radius: 16px;
  background: #F8CDE1;
  background-image: url(${require("../assets/left.png")});
  background-repeat: no-repeat;
`;

const SkincareText = styled.div`
  width: 309px;
  color: #A53F64;
  text-align: right;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  margin-top: 26px;
  margin-left: 350px;
`;

const RightContainer = styled.div`
margin-top:50px;
  width: 691px;
  height: 228px;
  border-radius: 16px;
  background: #D8DBDE;
  background-image: url(${require("../assets/right.png")});
  background-repeat: no-repeat;
`;

const FacepacksText = styled.div`
  width: 232px;
  color: #1B4B66;
  text-align: right;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  margin-top: 26px;
  margin-left: 420px;
`;

const Makeup = () => {
    return (
        <MakeupWrapper className="selfcare">
            <MakeupContainer className="makeup">
                <MakeupComponent className="makeup-com">
                    <LifestyleText className="makeup-lifestyle">LIFESTYLE</LifestyleText>
                    <AccessoriesText className="makeup-accessories">Makeup Accessories from Top Brands</AccessoriesText>
                </MakeupComponent>
                <MakeupTop className="makeup-top"></MakeupTop>
            </MakeupContainer>
            <BottomContainer className="makeup-bottom">
                <LeftContainer className="makeup-left">
                    <SkincareText className="skincare-essen">Skincare Essentials</SkincareText>
                    <div style={{ borderRadius: 30, borderColor: "#F1F1F1", width: 51, height: 51, paddingLeft: 595, paddingBottom: 26 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                            <circle cx="25.5" cy="25.5" r="25.5" fill="#F1F1F1" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0169 16.2669C29.7829 15.5009 31.0249 15.5009 31.7909 16.2669L40.6178 25.0937C40.9857 25.4616 41.1924 25.9605 41.1924 26.4808C41.1924 27.001 40.9857 27.4999 40.6178 27.8678L31.7909 36.6947C31.0249 37.4607 29.7829 37.4607 29.0169 36.6947C28.2508 35.9287 28.2508 34.6867 29.0169 33.9207L34.4952 28.4423H11.7693C10.6859 28.4423 9.80774 27.5641 9.80774 26.4808C9.80774 25.3974 10.6859 24.5192 11.7693 24.5192H34.4952L29.0169 19.0409C28.2509 18.2749 28.2508 17.0329 29.0169 16.2669Z" fill="#A53F64" />
                        </svg></div>
                </LeftContainer>
                <RightContainer className="makeup-right">
                    <FacepacksText className="Facepacks">Facepacks & Peels</FacepacksText>
                    <div style={{ borderRadius: 30, borderColor: "#F1F1F1", width: 51, height: 51, paddingLeft: 595, paddingBottom: 26 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                            <circle opacity="0.16" cx="25.5" cy="25.5" r="25.5" fill="#1B4B66" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0169 16.2669C29.7829 15.5009 31.0249 15.5009 31.7909 16.2669L40.6178 25.0937C40.9857 25.4616 41.1924 25.9605 41.1924 26.4808C41.1924 27.001 40.9857 27.4999 40.6178 27.8678L31.7909 36.6947C31.0249 37.4607 29.7829 37.4607 29.0169 36.6947C28.2508 35.9287 28.2508 34.6867 29.0169 33.9207L34.4952 28.4423H11.7693C10.6859 28.4423 9.80774 27.5641 9.80774 26.4808C9.80774 25.3974 10.6859 24.5192 11.7693 24.5192H34.4952L29.0169 19.0409C28.2509 18.2749 28.2508 17.0329 29.0169 16.2669Z" fill="#1B4B66" />
                        </svg></div>
                </RightContainer>
            </BottomContainer>
        </MakeupWrapper>
    );
};

export default Makeup;


