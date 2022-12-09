import {ProfileChangedPayload} from "../profile/profileSlice";
import {headers, parseResponse} from "./utils";
import {getAccessToken} from "../auth/authSlice";

const profileAPI = {

    async getRating(): Promise<ProfileChangedPayload> {
        const request = new window.Request(`http://localhost:8000/api/rating`, {
            method: 'GET',
            headers: headers(getAccessToken()),
        });
        const response = await fetch(request);
        return parseResponse(response);
    },
};

export default profileAPI;