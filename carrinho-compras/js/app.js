let carrinhoDeCompras; //variavel para armazenar a lista de compras.
let valoresProdutos; //variavel para armazenar a lista preços.

function adicionar(){ //função para quando for clicado em "adicionar" recuperar quais produtos foram adicionados
    
    let quantidadeProdutos = document.getElementById('quantidade').value; //recuperando a quantidade de produtos
    let produtos = document.getElementById('produto').value; //recuperando o produto selecionado
    carrinhoDeCompras = produtos.split('-')[0];
    valoresProdutos = parseFloat(produtos.split('$')[1]).toFixed(2);

    if(quantidadeProdutos == ''){ //condicional para verificar se a quantidade é 0
        quantidadeProdutos = 1;
    }

    console.log(quantidadeProdutos); //verificando no console se a quantidade foi recuperada corretamente
    console.log(carrinhoDeCompras);
    console.log(valoresProdutos);

}