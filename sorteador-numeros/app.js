function sortear(){
    let quantidadeNumeros = document.getElementById("quantidade").value; //alocando valor de 'quantidade' à uma variável
    let numeroMinimo = parseInt(document.getElementById("de").value); //alocando valor de 'de' à uma variável
    let numeroMaximo = parseInt(document.getElementById("ate").value); //alocando valor de 'ate' à uma variável

    let numerosSorteados = []; //declarando as variaveis
    let numero; //declarando as variaveis

    for ( let i = 0; i < quantidadeNumeros; i++){ //Faça isso X vezes, e depois pare
        numero = obterNumeroRandom(numeroMinimo, numeroMaximo); //alocando os valores da função de numeros aleatorios
        numerosSorteados.push(numero); //alocando os valores obtidos na lista
    }
    alert(numerosSorteados); //exibindo a lista de numeros sorteados
}

function obterNumeroRandom(min, max){ //obtendo números aleatorios
    return Math.floor(Math.random() * (max - min + 1)) + min; //retornando os valores para os parametros
}