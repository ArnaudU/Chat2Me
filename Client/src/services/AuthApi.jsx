import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from './LocalStorage';

export function hasAuth() {
    const token = getItem('token');
    const result = token ? tokenIsValid(token) : false;

    if (false === result) {
        removeItem('token');
    }

    return false;
}

export async function login(credentials) {
    return axios
        .post('http://localhost:8888/api/login_check', credentials)
        .then(response => response.data.token)
        .then(token => {
            addItem('token', token);

            return true;
        });
}

export function logout() {
    removeItem('token');
}

function tokenIsValid(token) {
    const { exp: expiration } = jwtDecode(token);

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }

    return true;
}
