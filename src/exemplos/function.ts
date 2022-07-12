// Definição de tipo de retorno de uma função
function somarValoresNumericos(numero1: number, numero2: number): number {
    // return numero1 + numero2.toString()
    // Após a definição, o tipo 'string' não pode ser atribuído ao tipo 'number'.
    return numero1 + numero2;
}

console.log(somarValoresNumericos(10,20));

// void
// Semelhante a linguagens como Java, void é usado onde não há dados.
// Se uma função não retornar nenhum valor, pode-se especificar void como tipo de retorno.
function printarValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
}

//callback
function somarValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number {
    return numero / numero;
}

console.log('somar e elevar ao quadrado: ', somarValoresNumericosETratar(2, 3, aoQuadrado))
console.log('somar e dividir pelo resultado: ',somarValoresNumericosETratar(2, 3, dividirPorEleMesmo))