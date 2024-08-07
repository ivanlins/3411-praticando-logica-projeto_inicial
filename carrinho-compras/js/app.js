let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$0';


function adicionar() { //função para quando for clicado em "adicionar" recuperar quais produtos foram adicionados
    let carrinhoDeCompras; //variavel para armazenar a lista de compras.
    let valoresProdutos; //variavel para armazenar a lista preços.
    let valorTotal; //variavel para armazenar elemento de total do HTML     
    let quantidadeProdutos = document.getElementById('quantidade').value; //recuperando a quantidade de produtos
    let produtos = document.getElementById('produto').value; //recuperando o produto selecionado
    let listaCarrinho = document.getElementById('lista-produtos');
    let valorFinal = document.getElementById('valor-total'); //recuperando o elemento de valor total do documento



    carrinhoDeCompras = produtos.split('-')[0];
    valoresProdutos = parseFloat(produtos.split('$')[1]);

    if (carrinhoDeCompras == '') { //condicional para verificar se a quantidade é 0
        alert('insita um produto valido');
        return;
    }


    if (quantidadeProdutos == '') { //condicional para verificar se a quantidade é 0
        alert('insita uma quantidade valida');
        return;
        quantidadeProdutos = 1;
    }

    //alterar valores dentro do carrinho do documento
    valorTotal = parseFloat(quantidadeProdutos * valoresProdutos); //calculando o valor total do produto

    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidadeProdutos}x</span> ${carrinhoDeCompras} <span class="texto-azul">R$${valorTotal}</span></section>`;
    totalGeral = totalGeral + valorTotal;

    valorFinal.textContent = (`R$${totalGeral}`); //imprimindo valor final na tela

    quantidadeProdutos = '';
    document.getElementById('quantidade').value = null;

}

function limpar() {
    totalGeral = 0;
    valorTotal = 0;
    carrinhoDeCompras = null;
    listaCarrinho = null;

    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}