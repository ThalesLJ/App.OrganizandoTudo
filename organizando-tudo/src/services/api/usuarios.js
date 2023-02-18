import axios from "axios";

const api = axios.create({
    baseURL: 'https://data.mongodb-api.com/app/application-0-mqvuy/endpoint',
});

export function APILogin(user, password) {
    return api.post('/Login', { apelido: String(user), senha: String(password) })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

//Criar Conta - POST /CriarConta
//Login - POST /Login
//Validacao Token - POST /ValidarToken
//Listar Perfil - GET /Perfil
//Atualizar Perfil - PUT /Perfil
