import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from '../feature/auth/authSlice';
import modalReducer from '../feature/modal/modalSlice';
import profileReducer from '../feature/profile/profileSlice';

import rootSaga from './rootSaga';

const rootReducer = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    profile: profileReducer
});
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
