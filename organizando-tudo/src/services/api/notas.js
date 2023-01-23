import axios from "axios";

const api = axios.create({
    baseURL: 'https://data.mongodb-api.com/app/application-0-mqvuy/endpoint',
});

export function GET_NOTAS() {
    return api.get('/Notas', { headers: { 'Authorization': 'Bearer fc25ae986c621268d70694f1f32a907320c23722058e46d815bf0cc6a135d3d4' } })
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
