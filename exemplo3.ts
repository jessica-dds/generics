// type TCarro = {
//     id: number
//     modelo: string
//     ano: number
// }

// type OutroTCarro = Omit<TCarro, 'id'>


import knex from "knex";


type Usuario = {
    id: number,
    nome: string,
    email: string,
    senha: string
}

async function listarUsuarios() {
    return await knex<Usuario>('usuarios').insert({
        id: 1
    })
}