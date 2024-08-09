//Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.
let numero = parseInt(prompt('Digite um número: '));
let resultado;

function imparOuPar(n1){
    if(n1 % 2 == 0){
        return 'Par'
    }   else{
        return 'Impar'
    }
}

resultado = imparOuPar(numero)

alert(resultado);