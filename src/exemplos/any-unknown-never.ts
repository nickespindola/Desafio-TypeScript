// Diferença do 'any' e do 'unknown'.
// Unknown pode ser considerado uma boa prática.
let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = true;
unknownValor = 'teste';

let stringTest2: string = 'verificar';
// "stringTest2 = unknownValor" dá problema.

if(typeof unknownValor === 'string'){
    stringTest2 = unknownValor
}

// never e throw
function jogarErro(erro: string, codigo: number): never{
    throw {error: erro, code: codigo}
}

jogarErro('deu erro', 500)