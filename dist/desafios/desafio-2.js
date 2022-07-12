"use strict";
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
var Trab;
(function (Trab) {
    Trab[Trab["Atriz"] = 0] = "Atriz";
    Trab[Trab["Padeiro"] = 1] = "Padeiro";
})(Trab || (Trab = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Trab.Atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Trab.Padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Trab.Atriz
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Trab.Padeiro
};
