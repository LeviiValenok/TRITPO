import { put, call, takeLatest } from 'redux-saga/effects';
import { profileActions, ProfileChangedPayload } from './profileSlice';
import profileAPI from '../services/profile';
import { getErrorMessage } from '../../common/utils';
function* handleRating () {
    try{
        const result: ProfileChangedPayload = yield call(profileAPI.getRating);
        yield put(profileActions.getRatingSuccess(result));
    }catch (error) {
        console.log(error);
        yield put(profileActions.getRatingFailure(getErrorMessage(error)));
    }
}

export default function* saga() {
    yield takeLatest(profileActions.getRatingSuccess.type, handleRating);
}
