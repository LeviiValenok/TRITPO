import {selectAuthError, SignInPayload, SignInResponse, SignUpPayload} from '../auth/authSlice';
import { parseResponse } from './utils';
import {useAppSelector} from "../../app/hooks";
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_API_DOMAIN;

const authAPI = {
    async login(payload: SignInPayload): Promise<SignInResponse> {
        const body = {
            phone : payload.phone,
            password: payload.password
        }
        console.log('input parametres:', payload);
        const url = `http://localhost:8000/auth/sign-in`;
        const request = new window.Request(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
            },
        });
        const response = await fetch(request);
        console.log('response', response)
        return parseResponse(response);
    },

    async register(payload: SignUpPayload) : Promise<SignInResponse> {
        const body = {
            email: payload.email,
            name: payload.name,
            phone: payload.phone,
            password: payload.password,
        };
        const url = `http://localhost:8000/auth/sign-up`;
        const request = new window.Request(url, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const response = await fetch(request);
        console.log(response)
        return parseResponse(response);
    },

};

export default authAPI;