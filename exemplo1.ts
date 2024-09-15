function imprimir1(param: string): string {
    return param
}

function imprimir2(param: number): number {
    return param
}

// não recomendado utilizar any--> melhor usar generics
// function imprimir3(param: any): any {
//     return param
// }

function imprimir4<T>(param: T): T {
    return param
}

const ex4 = imprimir4<number>(123)
ex4.toFixed(2)