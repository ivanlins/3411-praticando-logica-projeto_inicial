//recuperar nomes digitados e armazenar
let nomesAdicionados = [];
// nomesAdicionados.join(', ');
let nomesSorteados = document.getElementById('lista-sorteio');

function adicionar(){

    let nomeDigitado = document.getElementById('nome-amigo');
    
    nomesAdicionados.push(nomeDigitado.value);
    console.log(nomesAdicionados);
    document.getElementById('lista-amigos').textContent = `${nomesAdicionados.join(', ')}`
    nomeDigitado.value = '';
}

//sortear nomes para cada pessoa digitados alearóriamente

function sortear() {
    let listaSorteados = [...nomesAdicionados] //array agora está clonada corretamente

    embaralha(listaSorteados);
    for (let i = 0; i < nomesAdicionados.length; i ++){
        let nomeFinal = listaSorteados[i];
        if(nomesAdicionados[i] == nomeFinal){
            embaralha(nomeFinal);
        }
        nomesSorteados.innerHTML = nomesSorteados.innerHTML + `<p id="lista-sorteio">${nomesAdicionados[i]}, tirou ${nomeFinal}</p>`
        console.log(listaSorteados);
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
    nomesAdicionados = [];
    listaSorteados = [...nomesAdicionados];
    nomeDigitado = '';
    document.getElementById('lista-amigos').textContent = ''
    nomesSorteados.textContent = ''

}