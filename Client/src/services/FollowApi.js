import api from '../Api'

export function addfollow(id) {
    return (
        api.post(`/follow/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    return true
                }
                return false
            })
            .catch((err) => {
                console.log(err)
                return false
            })
    )
}

export function deletefollow(id) {
    return (
        api.delete(`/follow/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    return true
                }
                return false
            })
            .catch((err) => {
                console.log(err)
                return false
            })
    )
}


export function getListFollow(id, which) {
    return (
        api.get(`/${which}/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    return res.data
                }
            })
            .catch((err) => {
                console.log(err)
            })
    )
}
