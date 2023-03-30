import Message from './Message';

//variable pour récuperer une liste de message

const ListMessage = () => {
    const posts = [
        {
            id: 1,
            username: "Moi",
            content: "Bienvenue sur World Bird!",
            fav: 1,
            retweet: 5,
            date: new Date(),
        }
    ];
    return (
        <div>
            {posts.map((post) =>
                <Message
                    key={post}
                    username={post.username}
                    content={post.content}
                    fav={post.fav}
                    rt={post.retweet}
                />
            )}
        </div>
    );
};

export default ListMessage;