import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Modal, { ModalProps } from '../../common/shared/Modal';
import { PrimaryModalButton } from '../../common/shared/Button';
import FormInput from '../../common/shared/FormInput';
import FormPasswordInput from '../../common/shared/FormPasswordInput';
import colors from '../../style/colors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { authActions, selectAuthError, SignUpPayload } from './authSlice';
import { ErrorMessage, Form } from '../../common/shared/Form';

function SignUpModal({ isOpen, onClose }: ModalProps) {
    const dispatch = useAppDispatch();
    const serverErrorMessage = useAppSelector(selectAuthError);
    const [termsChecked, setTerms] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const name = useRef<HTMLInputElement>(null);
    const repeatPassword = useRef<HTMLInputElement>(null);
    const phone = useRef<HTMLInputElement>(null);

    console.log('IsOpen', isOpen);
    useEffect(() => {
        console.log('it should open');
        // resetting from values on form opening
        if (isOpen) {
            setTerms(false);
            setErrorMessage('');
            if (email.current) {
                email.current.value = '';
            }
            if (password.current) {
                password.current.value = '';
            }
            if (phone.current) {
                phone.current.value = '';
            }
            if (name.current) {
                name.current.value = '';
            }
            if (repeatPassword.current) {
                repeatPassword.current.value = '';
            }
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setErrorMessage('');
        e.preventDefault();

        const payload: SignUpPayload = {
            email: email?.current?.value || '',
            password: password?.current?.value || '',
            name: name?.current?.value || '',
            phone: phone?.current?.value || '',
            repeatPassword: repeatPassword?.current?.value || '',
        };

        const message = formValidation(termsChecked, payload);

        if (message) {
            setErrorMessage(message);
        } else {
            dispatch(authActions.signUp(payload));
        }
    };

    const handleCheckbox = () => {
        setTerms(!termsChecked);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} header="Sign up">
            <Form onSubmit={handleSubmit}>
                <FormInput id="email" type="text" label="Email" placeholder="Enter Email" inputRef={email} />
                <FormInput id="name" type="text" label="Name" placeholder="Enter Name" inputRef={name} />
                <FormInput id="phone" type="phone" label="Phone" placeholder="Enter Phone" inputRef={phone} />
                <FormPasswordInput id="password" label="Password" placeholder="Enter Password" showEye inputRef={password} />
                <FormPasswordInput
                    id="repeat-password"
                    label="Repeat password"
                    placeholder="Enter Password"
                    inputRef={repeatPassword}
                />
                {(errorMessage || serverErrorMessage) && <ErrorMessage>{errorMessage || serverErrorMessage}</ErrorMessage>}
                <PrimaryModalButton type="submit" stretch>
                    Sign up
                </PrimaryModalButton>
            </Form>
        </Modal>
    );
}

const LinkToDoc = styled.a`
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
  color: ${colors.burntSienna};
`;

function formValidation(termsChecked: boolean, payload: SignUpPayload): string | false {
    if (!payload.email) {
        return 'Email is required';
    }
    if (!payload.password) {
        return 'Password is required';
    }
    if (!payload.repeatPassword) {
        return 'Please repeat the password';
    }
    if (payload.password !== payload.repeatPassword) {
        return 'Passwords do not match';
    }
    if (!payload.name) {
        return 'Name is required';
    }
    if (!payload.phone) {
        return 'Phone is required';
    }
    return false;
}

export default SignUpModal;
