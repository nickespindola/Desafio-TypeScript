// Definição de tipos de variáveis personalizados
type input = number | string;

function somarValores(input1: input, input2: input){
    if (typeof input1 === "string" || typeof input2 === "string"){
        return input1.toString() + input2.toString();
    } else{
        return input1 + input2;  
    }
}

console.log(somarValores(10,10))
console.log(somarValores('Olá, ', 'mundo!'))
console.log(somarValores('10', 10))