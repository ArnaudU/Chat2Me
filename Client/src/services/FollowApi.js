import proxy from '../Proxy'

export function addfollow(id) {
    return (
        proxy.post(`/follow/${id}`)
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
        proxy.delete(`/follow/${id}`)
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
        proxy.get(`/${which}/${id}`)
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
