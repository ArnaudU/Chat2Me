import api from '../Api';
import { getItem } from './LocaleStorage';

export function getUser() {
    return JSON.parse(getItem('session'))
}

export function getUsername() {
    return JSON.parse(getItem('session')).user
}

export function getUserProfilInfo(user) {
    return (
        api.get(`/user/${user}`)
            .then((response) => {
                if (response.status === 200) {
                    return response.data
                }
            })
    )
}

export function changeBio(newBio) {
    return (
        api.post(`/user/${getUsername()}/description`, { description: newBio })
            .then((response) => {
                return response.status === 200
            })
    )
}