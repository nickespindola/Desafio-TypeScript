// Exemplos com listas, objetos e interfaces
const pessoa = {
    nome: 'Nicolas',
    idade: 21,
    profissao: 'desenvolvedor'
}

pessoa.idade = 25

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 28,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 26,
    profissao: 'desenvolvedora'
}

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    Administrador,
    JogadoraDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const marta: Pessoa = {
    nome: 'Marta',
    idade: 36,
    profissao: Profissao.JogadoraDeFutebol
}

const formiga: Pessoa = {
    nome: 'Formiga',
    idade: 44,
    profissao: Profissao.JogadoraDeFutebol
}

const romulo: Estudante = {
    nome: 'Romulo',
    idade: 25,
    profissao: Profissao.Administrador,
    materias: ['matemática', 'gestão de processos', 'direito tributário']
}

const marcos: Estudante = {
    nome: 'Marcos',
    idade: 22,
    materias: ['matemática', 'física', 'programação']
}

function listar(lista:string[]){
    for (const item of lista){
        console.log('- ', item)
    }
}

listar(marcos.materias)