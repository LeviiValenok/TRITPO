import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { modalType } from './constants';
import {RootState} from '../../app/store';

export interface ModalCustomProps {
    [key: string]: string;
}

export interface ModalState {
    isOpen: boolean;
    customProps?: ModalCustomProps;
}


interface ModalsState {
    [key: string]: ModalState;
}

type setOpenPayload = {
    type: modalType;
    isOpen: boolean;
    customProps?: ModalCustomProps;
};

// Define the initial state using that type
const initialState = {
    [modalType.SignIn]: { isOpen: false },
    [modalType.SignUp]: { isOpen: false },
} as ModalsState;

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsOpen(state, action: PayloadAction<setOpenPayload>) {
            console.log('isOpenSlice', initialState);
            state[action.payload.type] = { isOpen: action.payload.isOpen, customProps: action.payload.customProps };
        },
    },
});

export const modalActions = modalSlice.actions;

export const selectIsModalOpen = (state: RootState, type: modalType) => state.modal[type].isOpen;
export const selectModalCustomProps = (state: RootState, type: modalType) => state.modal[type].customProps;

export default modalSlice.reducer;
