// ---------- Função em padrão utilizando generics ---------- 
// const useState = <T>() => {}


// ---------- tipando o padrão do dado ---------- 
// function useState<T = string>() {
//     let state: T

//     function getState(): T {
//         return state
//     }

//     function setState(newState: T) {
//         state = newState
//     }

//     return { getState, setState }
// }

// const usuario = useState()

// usuario.setState('123')
// console.log(usuario.getState());



// ---------- tipo ---------- 
// function useState<T>() {
//     let state: T

//     function getState(): T {
//         return state
//     }

//     function setState(newState: T) {
//         state = newState
//     }

//     return { getState, setState }
// }

// const usuario = useState<string>()

// usuario.setState('123')
// console.log(usuario.getState());


// ---------- herdando características de um tipo ja existente ---------- 

type Pessoa = {
    id: number,
    nome: string
}

type Pessoa2 = {
    id: number,
    nome: string,
    idade: number
}



function useState<T extends Pessoa>() {
    let state: T

    function getState(): T {
        return state
    }

    function setState(newState: T) {
        state = newState
    }

    return { getState, setState }
}

const usuario = useState()

// usuario.setState()
console.log(usuario.getState());