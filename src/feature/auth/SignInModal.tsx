import React, { useEffect, useRef, useState } from 'react';

import Modal, { ModalProps } from '../../common/shared/Modal';
import { PrimaryModalButton } from '../../common/shared/Button';
import FormInput from '../../common/shared/FormInput';
import FormPasswordInput from '../../common/shared/FormPasswordInput';
import { authActions, selectAuthError, SignInPayload } from './authSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ErrorMessage, Form } from '../../common/shared/Form';

function SignInModal({ isOpen, onClose }: ModalProps) {
    const dispatch = useAppDispatch();
    const serverErrorMessage = useAppSelector(selectAuthError);
    const [errorMessage, setErrorMessage] = useState('');
    const phone = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // resetting from values on form opening
        if (isOpen) {
            setErrorMessage('');
            if (phone.current) {
                phone.current.value = '';
            }
            if (password.current) {
                password.current.value = '';
            }
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setErrorMessage('');
        e.preventDefault();

        const payload: SignInPayload = {
            phone: phone?.current?.value || '',
            password: password?.current?.value || '',
        };

        const message = formValidation(payload);

        if (message) {
            setErrorMessage(message);
        } else {
            dispatch(authActions.signIn(payload));
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} header="Sign in">
            <Form onSubmit={handleSubmit}>
                <FormInput type="text" label="Phone" placeholder="Enter Phone" inputRef={phone} />
                <FormPasswordInput label="Password" placeholder="Enter Password" showEye inputRef={password} />
                {(errorMessage || serverErrorMessage) && <ErrorMessage>{errorMessage || serverErrorMessage}</ErrorMessage>}
                <PrimaryModalButton type="submit" stretch>
                    Sign in
                </PrimaryModalButton>
            </Form>
        </Modal>
    );
}

function formValidation(payload: SignInPayload): string | false {
    if (!payload.phone) {
        return 'Email is required';
    }
    if (!payload.password) {
        return 'Password is required';
    }
    return false;
}

export default SignInModal;
