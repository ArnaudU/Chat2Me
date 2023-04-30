import proxy from "../Proxy";

export async function createMessage(content) {
    return (
        proxy.post('/message', content)
            .then(response => {
                return response.status === 200
            })
    )
}

export function getPostsFromId(id) {
    return (
        proxy.get(`/message/user/${id}`)
            .then((response) => {
                return response.data
            })
    )
}

export function getRetweetPostFromId(id) {
    return (
        proxy.get(`/message/${id}/retweet`)
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
        proxy.get(`/message/${id}/get`)
            .then((response) => {
                return response.data
            })
    )
}

export function searchMessage(value) {
    return (
        proxy.post('/message/search', { content: value })
            .then((response) => {
                return response.data
            })
    )
}

export function getRecentPost() {
    return (
        proxy.get('/message/recent')
            .then(response => {
                return response.data
            })
    )
}

export function deleteMessage(msgid) {
    return (
        proxy.delete(`message/delete/${msgid}`)
            .then((response) => {
                return response
            })
    )
}

export function likeMessage(msgid) {
    return (
        proxy.post(`message/${msgid}/like`)
            .then((response) => {
                return response
            })
    )
}

export function retweetMessage(msgid) {
    return (
        proxy.post(`message/${msgid}/retweet`)
            .then((response) => {
                return response
            })
    )
}

export function getAllResponse(msgid) {
    return (
        proxy.get(`response/${msgid}`)
            .then((response) => {
                return response.data
            }))
}

export function getMessagesFromAllFollower() {
    return (
        proxy.get('/message/follow/all')
            .then((response) => {
                return response.data
            })
    )
}

export function createResponse(msgid, content) {
    return (
        proxy.post(`response/${msgid}`, content)
            .then((response) => {
                return response
            }))
}