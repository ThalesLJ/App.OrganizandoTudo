import axios from "axios";
import { GetSession } from "../session/usuarios";

const api = axios.create({
    baseURL: 'https://data.mongodb-api.com/app/application-0-mqvuy/endpoint',
});

let token = '';

async function GetToken() {
    const resultado = await GetSession();
    for (let i = 0; i < resultado.length; i++) {
        if (resultado[i][0] == 'token') token = 'Bearer ' + (resultado[i][1]).toString();
    }
}

export async function GET_NOTAS() {
    await GetToken();
    return api.get('/Notas', { headers: { 'Authorization': token } })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
};

//Criar Nota - POST /Nota
//Atualizar Nota - PUT /Nota
//Deletar Nota - DELETE /Nota
//Atualizar Privacidade - PUT /AtualizarPrivacidadeNota

//Pesquisar Nota - GET /Nota
//Buscar Notas - GET /Notas
