import { Pessoa } from "./Pessoa";

const pessoa = new Pessoa()

pessoa.cadastrar({
    id: 1,
    nome: 'Jéssica',
    email: 'jessica@email.com'
})

pessoa.cadastrar({
    id: 2,
    nome: 'Joaquim',
    email: 'joaquim@email.com'
})

pessoa.editar(2, {
    nome: 'Joaquim Gleizer',
    email: 'joaquim@email.com'
})

console.log(pessoa.listar());
