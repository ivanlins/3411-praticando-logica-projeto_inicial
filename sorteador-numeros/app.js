function sortear(){
    let quantidadeNumeros = document.getElementById("quantidade").value; //atribuindo valor de 'quantidade' à uma variável
    let numeroMinimo = parseInt(document.getElementById("de").value); //atribuindo valor de 'de' à uma variável
    let numeroMaximo = parseInt(document.getElementById("ate").value); //atribuindo valor de 'ate' à uma variável

    alert(`qtd numeros: ${quantidadeNumeros}`); //teste para saber se os números estão sendo recuperados corretamente
    alert(`de: ${numeroMinimo}`); //teste para saber se os números estão sendo recuperados corretamente
    alert(`ate: ${numeroMaximo}`); //teste para saber se os números estão sendo recuperados corretamente

}