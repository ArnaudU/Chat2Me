import api from '../Api'
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from './LocaleStorage';

export function hasAuth() {
    const token = getItem('token');
    const result = token ? tokenIsValid(token) : false;

    if (false === result) {
        removeItem('token');
    }

    return result;
}

export function login(user) {
    return (
        api.post('/login', user)
            .then(response =>
                response.data.session
            )
            .then(session => {
                addItem('token', session.token);
                addItem('session', JSON.stringify({
                    user: session.user,
                    user_id: session.user_id
                }))
                return true;
            })
    )
}

export function logout() {
    return (
        api.post('/logout', getItem('session'))
            .then(removeItem('token') && removeItem('session'))
    )
}



function tokenIsValid(token) {
    const { cookie: cookie } = jwtDecode(token);
    const cookieDate = new Date(cookie.expires);
    // Créer une instance de Date représentant la date courante
    const currentDate = new Date();
    return (currentDate < cookieDate)
}
