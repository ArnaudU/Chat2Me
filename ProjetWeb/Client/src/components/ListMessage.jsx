import Message from './Message';

//variable pour récuperer une liste de message

const ListMessage = () => {
    return (
        <div>
            <Message id="Moi" fav={10} rt={10} message="Bonjour" />
            <Message id="Lui" fav={10} rt={10} message="salut" />
            <Message id="Toi" fav={10} rt={10} message="Coucou" />
        </div>
    );
};

export default ListMessage;