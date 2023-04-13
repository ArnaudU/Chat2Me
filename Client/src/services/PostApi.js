import Api from "../Api";

export async function createMessage(content) {
    Api.post('/message', content).
        then(response => {
            if (response.status === 200)
                return true;
            return false
        })
}