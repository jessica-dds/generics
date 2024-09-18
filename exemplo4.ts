class BancoDeDados<T> {
    private dados: T[]

    adicionar(dado: T): void {
        this.dados.push(dado)
    }

    listar() {
        return this.dados
    }
}

interface Usuario {
    id: number
    nome: string
}

const usuario = new BancoDeDados<Usuario>()

usuario.adicionar({
    id: 1,
    nome: 'Jéssica'
})

usuario.listar()