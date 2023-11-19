import { Button } from "@mui/base";
import * as React from "react";
import './Makeup.css';
import { useNavigate } from "react-router";

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

export default function Makeup() {

    const navigate = useNavigate();


    const handleNavigation = () => {
        navigate("/products?category_id=6&offset=0&limit=20&type=PersonalCare");
    }

    return (

        <div className="selfcare">

            <div className="makeup" onClick={handleNavigation}>

                <div className="makeup-com">
                    <div className="makeup-lifestyle">LIFESTYLE</div>
                    <div className="makeup-accessories">Makeup Accessories from Top Brands</div>
                </div>

            </div>

            <div className="makeup-bottom">
                <div className="makeup-left" onClick={handleNavigation}>
                    <div className="skincare-essen">Skincare Essentials</div>
                    <div style={{ borderRadius: 30, borderColor: "#F1F1F1", width: 51, height: 51, paddingBottom: 26 , textAlign:'right'}}>
                        <svg style={{textAlign:'right'}} xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                            <circle cx="25.5" cy="25.5" r="25.5" fill="#F1F1F1" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M29.0169 16.2669C29.7829 15.5009 31.0249 15.5009 31.7909 16.2669L40.6178 25.0937C40.9857 25.4616 41.1924 25.9605 41.1924 26.4808C41.1924 27.001 40.9857 27.4999 40.6178 27.8678L31.7909 36.6947C31.0249 37.4607 29.7829 37.4607 29.0169 36.6947C28.2508 35.9287 28.2508 34.6867 29.0169 33.9207L34.4952 28.4423H11.7693C10.6859 28.4423 9.80774 27.5641 9.80774 26.4808C9.80774 25.3974 10.6859 24.5192 11.7693 24.5192H34.4952L29.0169 19.0409C28.2509 18.2749 28.2508 17.0329 29.0169 16.2669Z" fill="#A53F64" />
                        </svg>
                    </div>
                </div>

                <div className="makeup-right" onClick={handleNavigation}>
                    <div className="Facepacks">Facepacks & Peels</div>
                    <div style={{ borderRadius: 30, borderColor: "#F1F1F1", width: 51, height: 51,  paddingBottom: 26 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                            <circle opacity="0.16" cx="25.5" cy="25.5" r="25.5" fill="#1B4B66" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M29.0169 16.2669C29.7829 15.5009 31.0249 15.5009 31.7909 16.2669L40.6178 25.0937C40.9857 25.4616 41.1924 25.9605 41.1924 26.4808C41.1924 27.001 40.9857 27.4999 40.6178 27.8678L31.7909 36.6947C31.0249 37.4607 29.7829 37.4607 29.0169 36.6947C28.2508 35.9287 28.2508 34.6867 29.0169 33.9207L34.4952 28.4423H11.7693C10.6859 28.4423 9.80774 27.5641 9.80774 26.4808C9.80774 25.3974 10.6859 24.5192 11.7693 24.5192H34.4952L29.0169 19.0409C28.2509 18.2749 28.2508 17.0329 29.0169 16.2669Z" fill="#1B4B66" />
                        </svg></div>

                </div>
            </div>

        </div>
    );
};




