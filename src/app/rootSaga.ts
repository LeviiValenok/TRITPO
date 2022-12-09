import authSaga from '../feature/auth/authSaga';
import profileSaga from '../feature/profile/profileSaga';

import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([authSaga(), profileSaga()]);
}
