// Desafio 2

// Como melhorar o código abaixo:

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

enum Trab {
    Atriz,
    Padeiro
}

type Person = {
    nome: string,
    idade: number,
    profissao: Trab
}

let pessoa1: Person = {
    nome: "Maria",
    idade: 29,
    profissao: Trab.Atriz
}

let pessoa2: Person = {
    nome: "Roberto",
    idade: 19,
    profissao: Trab.Padeiro
}

let pessoa3: Person = {
    nome: "Laura",
    idade: 32,
    profissao: Trab.Atriz
}

let pessoa4: Person = {
    nome: "Carlos",
    idade: 19,
    profissao: Trab.Padeiro
}


