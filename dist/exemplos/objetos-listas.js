"use strict";
// Exemplos com listas, objetos e interfaces
const pessoa = {
    nome: 'Nicolas',
    idade: 21,
    profissao: 'desenvolvedor'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 28,
    profissao: 'pintor'
};
const paula = {
    nome: 'Andre',
    idade: 26,
    profissao: 'desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Administrador"] = 3] = "Administrador";
    Profissao[Profissao["JogadoraDeFutebol"] = 4] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const marta = {
    nome: 'Marta',
    idade: 36,
    profissao: Profissao.JogadoraDeFutebol
};
const formiga = {
    nome: 'Formiga',
    idade: 44,
    profissao: Profissao.JogadoraDeFutebol
};
const romulo = {
    nome: 'Romulo',
    idade: 25,
    profissao: Profissao.Administrador,
    materias: ['matemática', 'gestão de processos', 'direito tributário']
};
const marcos = {
    nome: 'Marcos',
    idade: 22,
    materias: ['matemática', 'física', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(marcos.materias);
