import axios from 'axios';

export default axios.create({
    // c'est aussi l'endroit où spécifier le port éventuel
    baseURL: "http://localhost:8000/api",

});