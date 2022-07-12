"use strict";
// Diferença do 'any' e do 'unknown'.
// Unknown pode ser considerado uma boa prática.
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = true;
unknownValor = 'teste';
let stringTest2 = 'verificar';
// "stringTest2 = unknownValor" dá problema.
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
// never e throw
function jogarErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogarErro('deu erro', 500);
