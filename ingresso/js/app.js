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
        if(quantidadeSelecionada > quantidadePista){
            alert('quantidade indisponivel');
            document.getElementById('qtd-pista').textContent = quantidadePista;
            return;
        }
        quantidadePista = quantidadePista - quantidadeSelecionada.value;
        console.log(quantidadePista);
        document.getElementById('qtd-pista').textContent = quantidadePista;
    }   else if(ingressoSelecionado.value == ingressoSuperior){
        if(quantidadeSelecionada.value > quantidadeSuperior){
            alert('quantidade indisponivel');
            document.getElementById('qtd-superior').textContent = quantidadeSuperior;
            return;
        }
        quantidadeSuperior = quantidadeSuperior - quantidadeSelecionada.value;
        console.log(quantidadeSuperior);
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
    }
        else if(ingressoSelecionado.value == ingressoInferior){
            if(quantidadeSelecionada.value > quantidadeInferior){
                alert('quantidade indisponivel');
                document.getElementById('qtd-inferior').textContent = quantidadeInferior;
                return;}
        quantidadeInferior = quantidadeInferior - quantidadeSelecionada.value;
        console.log(quantidadeInferior);
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        }
}