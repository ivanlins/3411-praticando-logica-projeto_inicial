//Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.
let numero1 = 0;
let numero2 = 0;
let resultado = 0;
let operacao;

numero1 = parseInt(prompt('Digite o primeiro número'));
numero2 = parseFloat(prompt('Digite o segundo número'));
alert('Qual operação matemática deseja fazer? Digite o sinal:');
operacao = prompt('Digite a operação desejada: + para Adição, - para Subtração, * ou x para Multiplicação, / para Divisão');

while (operacao !== '+' && operacao !== '-' && operacao !== '*' && operacao !== '/' && operacao !== 'x') {
    alert('Operação inválida! Por favor, tente novamente.');
    operacao = prompt('Digite a operação desejada: + para Adição, - para Subtração, * ou x para Multiplicação, / para Divisão');
}

if (operacao == '+') {
    resultado = calcSoma(numero1, numero2);
    alert(resultado);
} else if (operacao == '-') {
    resultado = calcSubtracao(numero1, numero2);
    alert(resultado);
} else if (operacao == '*' || operacao == 'x' || operacao == 'X') {
    resultado = calcMultiplicacao(numero1, numero2);
    alert(resultado);
} else if (operacao == '/') {
    resultado = calcDivisao(numero1, numero2);
    alert(resultado);
}

function calcSoma(n1, n2) {
    return n1 + n2;
}

function calcSubtracao(n1, n2) {
    return n1 - n2;
}

function calcMultiplicacao(n1, n2) {
    return n1 * n2;
}

function calcDivisao(n1, n2) {
    if (n2 !== 0) {
        return n1 / n2;
    } else {
        alert('Divisão por zero não é permitida.');
        return undefined;
    }
}