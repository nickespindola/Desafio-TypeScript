"use strict";
// Exemplos de tipos de variáveis e a variável 'any'.
let valorAny;
valorAny = 3;
valorAny = 'hello';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testao';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('olá, ', 'mundo');
