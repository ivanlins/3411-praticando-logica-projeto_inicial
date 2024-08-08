function comprar(){
    // recebe e armazena qual valor será recebido select e a quantidade de itens

    let quantidadePista = 0;
    let quantidadeSuperior = 0;
    let quantidadeInferior = 0;
    let quantidadeSelecionada = document.getElementById('qtd');
    let ingressoSelecionado = document.getElementById('tipo-ingresso');
    quantidadePista = document.getElementById('qtd-pista').textContent;
    quantidadeSuperior = document.getElementById('qtd-superior').textContent;
    quantidadeInferior = document.getElementById('qtd-inferior').textContent;

    let ingressoPista = "pista";
    let ingressoSuperior = 'superior';
    let ingressoInferior = 'inferior';
    //se o ingresso selecionado for pista reduz o valor total da pista pelo valor da quantidade escolhida.
    //senao se o ingresso selecionado for cadeira superior reduz o valor total da cadeira superior pelo valor da quantidade escolhida.
    //senao reduz o valor total da cadeira inferior pelo valor da quantidade escolhida
    // reduz a quantidade total dos ingressos vigentes e altera no HTML
    if(ingressoSelecionado.value == ingressoPista){
        quantidadePista = quantidadePista - quantidadeSelecionada.value;
        console.log(quantidadePista);
        document.getElementById('qtd-pista').textContent = quantidadePista;
        if(quantidadePista < 0){
            alert('quantidade indisponivel');
            document.getElementById('qtd-pista').textContent = 0;
            quantidadePista = 0;
            return;
        }
    }   else if(ingressoSelecionado.value == ingressoSuperior){
        quantidadeSuperior = quantidadeSuperior - quantidadeSelecionada.value;
        console.log(quantidadeSuperior);
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        if(quantidadeSuperior < 0){
            alert('quantidade indisponivel');
            document.getElementById('qtd-superior').textContent = 0;
            quantidadeSuperior = 0;
            return;
        }
    }
        else if(ingressoSelecionado.value == ingressoInferior){
        quantidadeInferior = quantidadeInferior - quantidadeSelecionada.value;
        console.log(quantidadeInferior);
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        if(quantidadeInferior < 0){
            alert('quantidade indisponivel');
            document.getElementById('qtd-inferior').textContent = 0;
            quantidadeInferior = 0;
        }
        }
}