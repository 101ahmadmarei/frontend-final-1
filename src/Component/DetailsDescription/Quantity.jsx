import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const QuantityInput = styled.div`
  display: flex;
`;

const ModifierButton = styled.button`
  user-select: none;
  
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;

  &.quantity-input__modifier--left {
    border-right:none;
    border-color:#1B4B66;
    background-color: background;
    border-radius: 4px 0 0 4px;
   }

  &.quantity-input__modifier--right {
    border-radius: 0 4px 4px 0;
    background-color: background;
    border-left:none;
    border-color:#1B4B66;
  }
`;

const ScreenInput = styled.input`
border-left:none;
border-right:none;
border-color:#1B4B66;

  color: #171520;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  width: 20px;
`;

function Quantity() {
    const [value, setValue] = useState(1);

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    const decrement = () => {
        setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
    };

    return (
        <div>
            <QuantityInput className="quantity-input">
                <ModifierButton
                    className="quantity-input__modifier quantity-input__modifier--left"
                    onClick={decrement}
                >
                    &mdash;
                </ModifierButton>
                <ScreenInput className="quantity-input__screen" type="text" value={value} readOnly />
                <ModifierButton
                    className="quantity-input__modifier quantity-input__modifier--right"
                    onClick={increment}
                >
                    &#xff0b;
                </ModifierButton>
            </QuantityInput>
        </div>
    );
}

export default Quantity;