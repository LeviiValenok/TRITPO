import React, { useState } from 'react';
import styled from 'styled-components';
import { FormInputProps, InputField } from './FormInput';

const PasswordInputField = styled(InputField)`
  position: relative;
  input[type='password'] {
    -webkit-text-security: square;
    padding: 16px 18px 15px;
  }

  img {
    margin-left: -30px;
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    right: 0;
    padding-right: 15px;
  }
`;

interface PasswordFormInputProps extends FormInputProps {
    showEye?: boolean;
}

function FormPasswordInput({
                               label = '',
                               placeholder = '',
                               showEye = false,
                               inputRef = null,
                               ...inputProps
                           }: PasswordFormInputProps) {
    const [type, setType] = useState('password');
    const togglePassword = () => {
        if (type === 'password') {
            setType('text');
        } else {
            setType('password');
        }
    };

    return (
        <PasswordInputField>
            {!!label && <label>{label}</label>}
            <input type={type} placeholder={placeholder} ref={inputRef} {...inputProps} defaultValue="" />
            {/*{showEye && (
                <img src={type === 'password' ? eyeIcon : closedEyeIcon} alt="show-password" onClick={togglePassword} />
            )}*/}
        </PasswordInputField>
    );
}

export default FormPasswordInput;
