import React, { RefObject } from 'react';
import styled from 'styled-components';

import colors from '../../style/colors';

export const InputField = styled.div`
  display: flex;
  row-gap: 3px;
  flex-direction: column;

  label {
    font-size: 16px;
    line-height: 18px;
    color: ${colors.blueLight2};
  }

  input {
    font-size: 18px;
    line-height: 21px;
    color: ${colors.blueLight2};
    background: ${colors.blackHaze};
    border: 1px solid ${colors.inputBorder};
    border-radius: 10px;
    padding: 16px 18px 15px;
  }

  input::placeholder {
    color: ${colors.inputPlaceholder};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 50px ${colors.blackHaze} inset;
    -webkit-text-fill-color: ${colors.blueLight2};
  }
`;

export interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
    type?: string;
    label?: string;
    placeholder?: string;
    inputRef?: RefObject<HTMLInputElement> | null;
}

function FormInput({ type = 'text', label = '', placeholder = '', inputRef = null, ...otherProps }: FormInputProps) {
    return (
        <InputField>
            {!!label && <label>{label}</label>}
            <input type={type} placeholder={placeholder} defaultValue="" ref={inputRef} {...otherProps} />
        </InputField>
    );
}

export default FormInput;
