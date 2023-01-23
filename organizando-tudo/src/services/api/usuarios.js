import axios from "axios";

const api = axios.create({
    baseURL: 'https://data.mongodb-api.com/app/application-0-mqvuy/endpoint',
});

//Criar Conta - POST /CriarConta
//Login - POST /CriarConta
//Validacao Token - POST /ValidarToken
//Listar Perfil - GET /Perfil
//Atualizar Perfil - PUT /Perfil
