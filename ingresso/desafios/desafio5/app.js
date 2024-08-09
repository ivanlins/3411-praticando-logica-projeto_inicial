// Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar
let tempCelcius;
let tempFahrenheit;
let resultado;
let convercao;

tempCelcius = parseFloat(prompt('Digite a temperatura em Celcius: ')).toFixed(1);
tempFahrenheit = parseFloat(prompt('Digite a temperatura em Fahrenheit: ')).toFixed(1);

//qual conversão realizar
alert('Qual conversão realizar? Celcius para Fahrenheit = 1 ou Fahrenheit para Celcius = 2');
convercao = prompt('Qual o numero da sua conversao');

if (convercao == 1){
    resultado = celciusParaFahrenheit(tempCelcius);
}   else if(convercao == 2){
    resultado = fahrenheitParaCelcius(tempFahrenheit);
}   else{
    alert('digite um codigo valido');
}

alert(resultado);
function celciusParaFahrenheit(c){
    c = (c * 9/5)+ 32;
    return c;
}

function fahrenheitParaCelcius(f){
    f = (f -= 26) / 2;
    return f;
}