import Api from "../Api";

export async function createMessage(content) {
    return (
        Api.post('/message', content)
            .then(response => {
                return response.status === 200
            })
    )
}

export function getPostsFromId(id) {
    return (
        Api.get(`/message/user/${id}`)
            .then((response) => {
                return response.data
            })
    )
}

export function getRetweetPostFromId(id) {
    return (
        Api.get(`/message/${id}/retweet`)
            .then((response) => {
                const posts = response.data;
                // Ajouter l'attribut "retweeted" à chaque élément de l'array
                const retweetedPosts = posts.map(post => {
                    return {
                        ...post,
                        retweeted: id
                    };
                });
                return retweetedPosts;
            })
    )
}

export async function getProfilPost(id) {
    const obj1 = await getPostsFromId(id);
    const obj2 = await getRetweetPostFromId(id);
    const posts = [...obj1, ...obj2].filter((post, index, self) =>
        index === self.findIndex(p => p._id === post._id)
    );
    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return posts;
}

export function getPost(id) {
    return (
        Api.get(`/message/${id}/get`)
            .then((response) => {
                return response.data
            })
    )
}

export function searchMessage(value) {
    return (
        Api.post('/message/search', { content: value })
            .then((response) => {
                return response.data
            })
    )
}

export function getRecentPost() {
    return (
        Api.get('/message/recent')
            .then(response => {
                return response.data
            })
    )
}

export function deleteMessage(msgid) {
    return (
        Api.delete(`message/delete/${msgid}`)
            .then((response) => {
                return response
            })
    )
}

export function likeMessage(msgid) {
    return (
        Api.post(`message/${msgid}/like`)
            .then((response) => {
                return response
            })
    )
}

export function retweetMessage(msgid) {
    return (
        Api.post(`message/${msgid}/retweet`)
            .then((response) => {
                return response
            })
    )
}

export function getAllResponse(msgid) {
    return (
        Api.get(`response/${msgid}`)
            .then((response) => {
                return response.data
            }))
}

export function getMessagesFromAllFollower() {
    return (
        Api.get('/message/follow/all')
            .then((response) => {
                return response.data
            })
    )
}

export function createResponse(msgid, content) {
    return (
        Api.post(`response/${msgid}`, content)
            .then((response) => {
                return response
            }))
}