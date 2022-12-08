import React, { ReactNode, RefObject } from 'react';
import styled from 'styled-components';

import checkmark from '../../assets/icons/checkmark.svg';
import colors from '../../style/colors';

interface CheckboxInputProps extends React.HTMLProps<HTMLInputElement> {
    id: string;
    children?: ReactNode;
    inputRef?: RefObject<HTMLInputElement> | null;
}

function CheckboxInput({ id, children = null, inputRef = null, ...restInputProps }: CheckboxInputProps) {
    return (
        <CheckboxWrapper>
            <label htmlFor={id}>
                <input type="checkbox" id={id} name={id} ref={inputRef} {...restInputProps} />
                <div>{children}</div>
            </label>
        </CheckboxWrapper>
    );
}

const CheckboxWrapper = styled.div`
  align-self: start;
  label {
    font-size: 16px;
    line-height: 18px;
    color: ${colors.blueLight2};
    display: grid;
    grid-template-columns: 24px auto;
    gap: 8px;
    align-items: center;
  }
  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: ${colors.white};
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 20px;
    height: 20px;
    background-color: ${colors.orange};
    border: 1px solid ${colors.blueLight};
    border-radius: 6px;
    //transform: translateY(-3px);
    display: grid;
    place-content: center;
    cursor: pointer;
  }

  input[type='checkbox']::before {
    content: '';
    width: 12px;
    height: 12px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background: none;
  }

  input[type='checkbox']:checked::before {
    transform: scale(1);
    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-size: 12px 12px;
  }
`;

export default CheckboxInput;
