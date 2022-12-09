import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../../app/store";

interface AuthState {
    isLoggedIn: boolean;
    loading: boolean;
    error: string;
    counter: number;
}

export interface SignUpPayload {
    email: string;
    name: string;
    password: string;
    phone: string;
    repeatPassword?: string;
}

export interface SignUpResponse {
    access_token: string;
}

export interface SignInPayload {
    password: string;
    phone: string;
}

export interface SignInResponse {
    access_token: string;
}

export const getAccessToken = () => localStorage.getItem('access_token') || '';
export const hasAccessToken = () => !!getAccessToken();

const initialState = {
    isLoggedIn: hasAccessToken(),
    loading: false,
    counter: 0,
    error: '',
} as AuthState;

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        signIn(state, action: PayloadAction<SignInPayload>){
            state.loading = true;
            state.error = '';
        },
        signInSuccess(state) {
            state.loading = false;
            state.isLoggedIn = true;
        },
        signInFailed(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.loading = true;
            state.error = '';
        },
        logoutSuccess(state) {
            state.loading = false;
            state.isLoggedIn = false;
        },
        logoutFailed(state) {
            state.loading = false;
        },
        signUp(state, action: PayloadAction<SignUpPayload>) {
            state.loading = true;
            state.error = '';
        },
        signUpSuccess(state) {
            state.loading = false;
        },
        signUpFailed(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const authActions = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn && hasAccessToken();
export const selectAuthError = (state: RootState) => state.auth.error;


export default authSlice.reducer;