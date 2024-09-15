import conexao from 'knex'

export const knexconexao = conexao({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'localhost',
        password: 'localhost',
        database: 'generics'
    }
})