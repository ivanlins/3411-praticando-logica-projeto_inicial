function sortear() {
    let quantidadeNumeros = document.getElementById("quantidade").value; //alocando valor de 'quantidade' à uma variável
    let numeroMinimo = parseInt(document.getElementById("de").value); //alocando valor de 'de' à uma variável
    let numeroMaximo = parseInt(document.getElementById("ate").value); //alocando valor de 'ate' à uma variável

    let numerosSorteados = []; //declarando as variaveis
    let numero; //declarando as variaveis
    let intervaloEntreNumeros = numeroMaximo - numeroMinimo + 1;

    if (numeroMaximo <= numeroMinimo) {
        alert(`O valor ${numeroMaximo}, é maior que ${numeroMinimo}.`);
        return;
    }

    if (quantidadeNumeros > intervaloEntreNumeros){
        alert(`O espaço é de ${intervaloEntreNumeros} números, não há espaço para ${quantidadeNumeros} números, escolha um número maior que ${numeroMaximo}`);
        return;
    }

        for (let i = 0; i < quantidadeNumeros; i++) { //Faça isso X vezes, e depois pare
            numero = obterNumeroRandom(numeroMinimo, numeroMaximo); //alocando os valores da função de numeros aleatorios
            
            while (numerosSorteados.includes(numero)) { //Laço de repetição para verificar se o resultado está se repetindo
                numero = obterNumeroRandom(numeroMinimo, numeroMaximo);  //alocando os valores da função de numeros aleatorios novamente
                alert('Tentando obter número inédito');
            }
            numerosSorteados.push(numero); //alocando os valores obtidos na lista
        }
        //alert(numerosSorteados); //exibindo a lista de numeros sorteados

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados} </label>`; //exibindo a lista de numeros sorteados dentro do HTML

        alterarStatusFBotao();
    }

    function obterNumeroRandom(min, max) { //obtendo números aleatorios
        return Math.floor(Math.random() * (max - min + 1)) + min; //retornando os valores para os parametros
    }

    function alterarStatusFBotao() {
        let botaoReiniciar = document.getElementById('btn-reiniciar');

        if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
            botaoReiniciar.classList.remove('container__botao-desabilitado');
            botaoReiniciar.classList.add('container__botao');
        } else {
            botaoReiniciar.classList.remove('container__botao');
            botaoReiniciar.classList.add('container__botao-desabilitado');
        }
    }

    function reiniciar() {
        document.getElementById("quantidade").value = ''; //alterando o valor dentro do HTML para ''
        document.getElementById("de").value = ''; //alterando o valor dentro do HTML para ''
        document.getElementById("ate").value = ''; //alterando o valor dentro do HTML para ''
        document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

        alterarStatusFBotao();
    }