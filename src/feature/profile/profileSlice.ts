import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

interface ProfileState {
    loading: boolean;
    error: string;
    rating: number;
}

export interface ProfilePayload {
    phone: string;
    rating: number;
}

export interface ProfileChangedPayload {
    rating: number;
}

const initialState = {
    rating: 5,
    loading: false,
    error: '' ,
} as ProfileState;

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getRatingSuccess(state, action: PayloadAction<ProfileChangedPayload>) {
            state.rating = action.payload.rating;
            state.loading = false;
        },
        getRatingRequest(state) {
            state.loading = true;
            state.error = '';
        },
        getRatingFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        setRating(state, action: PayloadAction<number>) {
            state.rating = action.payload;
        },
    },
});

export const profileActions = profileSlice.actions;
export const selectRating = (state: RootState) => state.profile.rating;

export default profileSlice.reducer;