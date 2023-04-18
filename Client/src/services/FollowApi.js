import api from '../Api'

export function follow(id) {
    api.post(`/follow/${id}`)
        .then()
}