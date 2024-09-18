import { Base } from "./Base";

type TPessoa = {
    id: number
    nome: string
    email: string
}

export class Pessoa extends Base<TPessoa> { }