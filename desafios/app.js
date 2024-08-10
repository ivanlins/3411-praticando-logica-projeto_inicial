// Crie uma função que valide se um número é positivo, negativo ou zero.

function verificacaoNumero(n){
    if (n < 0){
        alert(`O número ${n} é negativo`);
        return;
    }else if (n > 0){
        alert(`O número ${n} é positivo`);
        return;
    } else{
        alert('O número é zero')
    }
}

let numero = prompt('digite seu número');

verificacaoNumero(numero);

// Implemente uma função que verifique se uma pessoa é maior de idade.

function maiorDeIdade(idade){
    if(idade >= 18){
        alert('Você é maior de idade');
    }
    else{
        alert('você tem menos de 18 anos então é menor de idade')
    }
}

let idadeUsuario = prompt('Digite sua idade')

maiorDeIdade(idadeUsuario);

// Desenvolva uma função que valide se uma string é vazia ou não.

function vazioOuNao(vazio){

    if (vazio == ''){
        console.log('a string está vazia');
    } else{console.log(`a string contem "${vazio}" e não está vazia`)}
}

// Crie uma função que determine se um ano é bissexto
function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}
let anoVigente = 2024;
console.log(verificarAnoBissexto(anoVigente));
// Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
function calcularMedia(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        return "Um dos números não é válido.";
    }
    return (n1 + n2) / 2;
}

console.log(calcularMedia(8,5));

// Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
function obterTamanhoArray(array) {
    return array.length;
}

// Teste
console.log(obterTamanhoArray([1, 2, 3, 4]));
console.log(obterTamanhoArray([]));

// Crie um array e utilize a função includes para verificar se um elemento específico está presente
let array = [1, 2, 3, 4, 5];
console.log(array.includes(3));
console.log(array.includes(6));

// Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.
function elementoPresente(array, elemento) {
    return array.includes(elemento);
}

// Teste
console.log(elementoPresente([1, 2, 3], 2));
console.log(elementoPresente([1, 2, 3], 4));

// Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
let lista = ['maça', 'banana', 'morango'];
console.log(lista.includes('banana'));
console.log(lista.includes('laranja')); 

// Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

function listaDeAlunos(listaEstudantes, alunoProcurado){
    return listaEstudantes.some(aluno => 
        aluno.nome === alunoProcurado.nome && 
        aluno.curso === alunoProcurado.curso && 
        aluno.ra === alunoProcurado.ra
    );
}

let alunos = [
    {nome: 'Ivan', curso: 'EngSoftware', ra: 10001},
    {nome: 'kito', curso: 'LiderTec', ra: 10002},
    {nome: 'Iris', curso: 'EngSoftware', ra: 10003}
];

let alunoProcurado = {nome: 'Ivan', curso: 'EngSoftware', ra: 10001};

console.log(listaDeAlunos(alunos, alunoProcurado));

// Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return {
        somaPares,
        produtoImpares
    };
}

let numeros = [1, 2, 3, 4, 5];
let resultado = calcularSomaProduto(numeros);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);