import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { modalActions, selectIsModalOpen, selectModalCustomProps } from './modalSlice';
import { modalType } from './constants';
import SignUpModal from "../auth/SignUpModal";
import SignInModal from '../auth/SignInModal';


function Modals() {
    const signInModalOpen = useAppSelector((state) => selectIsModalOpen(state, modalType.SignIn));
    const signUpModalOpen = useAppSelector((state) => selectIsModalOpen(state, modalType.SignUp));
    console.log('signUpModalOpen', signUpModalOpen);
    const dispatch = useAppDispatch();

    return (
        <>
            <SignInModal
            isOpen={signInModalOpen}
            onClose={() => dispatch(modalActions.setIsOpen({ type: modalType.SignIn, isOpen: false }))}
        />
            <SignUpModal
                isOpen={signUpModalOpen}
                onClose={() => dispatch(modalActions.setIsOpen({ type: modalType.SignUp, isOpen: false }))}
            />
        </>
    );
}

export default Modals;
