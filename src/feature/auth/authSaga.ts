import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { authActions, SignInPayload, SignInResponse, SignUpPayload } from './authSlice';
import authAPI from '../services/auth';
import { getErrorMessage } from '../../common/utils';
import { modalActions } from '../modal/modalSlice';
import { modalType } from '../modal/constants';
import history from '../../app/history';

function* handleSignIn(action: { type: string; payload: SignInPayload}) {
    try {
        const result: SignInResponse = yield call(authAPI.login, action.payload);
        localStorage.setItem('access_token', result.access_token);
        yield put(authActions.signInSuccess());

        yield put(modalActions.setIsOpen({type: modalType.SignIn, isOpen: false}));
        history.push('/dashboard');
    } catch (error) {
        console.log(error);
        yield put(authActions.signInFailed(getErrorMessage(error)));
    }
}

function* handleLogout() {
    try {
        yield delay(500);
        localStorage.removeItem('access_token');
        yield put(authActions.logoutSuccess());

        // Redirect to Welcome page
        history.push('/');
    } catch (error) {
        console.log(error);
        yield put(authActions.logoutFailed());
    }
}

function* handleSignUp(action: { type: string; payload: SignUpPayload }) {
    try {
        yield call(authAPI.register, action.payload);
        yield put(authActions.signUpSuccess());

        // close the modal
        yield put(modalActions.setIsOpen({ type: modalType.SignUp, isOpen: false }));
    } catch (error) {
        console.log(error);
        yield put(authActions.signUpFailed(getErrorMessage(error)));
    }
}

export default function* saga() {
    yield takeLatest(authActions.signIn.type, handleSignIn);
    yield takeLatest(authActions.logout.type, handleLogout);
    yield takeLatest(authActions.signUp.type, handleSignUp);
}
