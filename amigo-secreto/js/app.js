//recuperar nomes digitados e armazenar
let nomesAdicionados = ['ivan','kito','iris','jana'];
nomesAdicionados.join(', ');
let nomesSorteados = document.getElementById('lista-sorteio');
let listaSorteados = nomesAdicionados;


function adicionar(){

    let nomeDigitado = document.getElementById('nome-amigo');
    
    nomesAdicionados.push(nomeDigitado.value);
    console.log(nomesAdicionados);
    document.getElementById('lista-amigos').textContent = `${nomesAdicionados.join(', ')}`
    nomeDigitado.value = '';
}


//sortear nomes para cada pessoa digitados alearóriamente


function sortear() {
    listaSorteados;
    embaralha(listaSorteados);
    for (let i = 0; i < nomesAdicionados.length; i ++){
        while(i < nomesAdicionados.length){
        nomesSorteados.innerHTML = nomesSorteados.innerHTML + `<p id="lista-sorteio">${nomesAdicionados[i]}, tirou ${listaSorteados[i]}</p>`
        console.log(listaSorteados);
            break;
    }
    }


}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

//reiniciar tudo quando o botão for clicado
function reiniciar(){

}