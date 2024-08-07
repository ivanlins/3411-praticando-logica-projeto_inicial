//utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value.

function enviar(){
    let valorFormulario = [];
    let placeHolder1 = document.getElementById('caixa1').value;
    let placeHolder2 = document.getElementById('caixa2').value;
    let placeHolder3 = document.getElementById('caixa3').value;
    
    valorFormulario.push(placeHolder1);
    valorFormulario.push(placeHolder2);
    valorFormulario.push(placeHolder3);
    
    //Exiba os valores no console e na tela.
    console.log(valorFormulario);
}