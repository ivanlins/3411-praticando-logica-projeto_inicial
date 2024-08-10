// Inicializa o array 'nomesAdicionados' com alguns nomes de exemplo
let nomesAdicionados = [];

// Seleciona o elemento HTML onde os nomes sorteados serão exibidos
let nomesSorteados = document.getElementById('lista-sorteio');

// Função para adicionar um novo nome à lista
function adicionar() {

    // Obtém o valor digitado no campo de texto com o id 'nome-amigo'
    let nomeDigitado = document.getElementById('nome-amigo');
    // Verifica se o valor digitado no campo de entrada está vazio
    if (nomeDigitado.value == '') {
        // Exibe um alerta se o campo estiver vazio
        alert('Informe um nome válido');
        // Interrompe a execução da função se o campo estiver vazio
        return;
    }

    // Verifica se o nome digitado já foi adicionado à lista de nomes
    if (nomesAdicionados.includes(nomeDigitado.value.toUpperCase())) {
        // Exibe um alerta se o nome já estiver na lista
        alert(`O nome "${nomeDigitado.value}" já foi adicionado, tente outro nome`);
        // Interrompe a execução da função se o nome já estiver na lista
        return;
    }
    // Adiciona o valor digitado ao array 'nomesAdicionados'
    nomesAdicionados.push(nomeDigitado.value.toUpperCase());

    // Exibe o array atualizado no console para verificação
    console.log(nomesAdicionados);

    // Atualiza o conteúdo do elemento HTML com id 'lista-amigos'
    // para mostrar todos os nomes adicionados, separados por vírgulas
    document.getElementById('lista-amigos').textContent = `${nomesAdicionados.join(', ')}`;

    // Limpa o campo de texto após adicionar o nome
    nomeDigitado.value = '';
    atualizarLista();
}

// Função para sortear nomes aleatoriamente, garantindo que ninguém tire a si mesmo
function sortear() {

    if (nomesAdicionados.length < 4) {
        alert(`O numero minimo para o sorteio é de: 4 amigos`);
        return;
    }
    // Cria uma cópia do array original 'nomesAdicionados' para 'listaSorteados'
    // Isso é feito para evitar alterações no array original
    let listaSorteados = [...nomesAdicionados];

    // Cria um conjunto (Set) para rastrear os nomes que já foram sorteados
    // O Set é útil aqui porque ele só permite valores únicos, evitando duplicatas
    let nomesJaSorteados = new Set();

    // Chama a função 'embaralha' para embaralhar o array 'listaSorteados'
    // Isso ajuda a distribuir os nomes de forma aleatória
    embaralha(listaSorteados);

    // Itera sobre cada elemento em 'nomesAdicionados'
    for (let i = 0; i < nomesAdicionados.length; i++) {
        // Seleciona o nome correspondente ao índice atual na lista embaralhada
        let nomeFinal = listaSorteados[i];

        // Enquanto o nome sorteado for igual ao nome original (ou seja, a pessoa tirou a si mesma)
        // ou se o nome já foi sorteado (existe no Set 'nomesJaSorteados'),
        // a lista é embaralhada novamente para tentar obter um novo nome válido
        while (nomesAdicionados[i] === nomeFinal || nomesJaSorteados.has(nomeFinal)) {
            // Embaralha a lista novamente para tentar gerar um resultado diferente
            embaralha(listaSorteados);
            // Atualiza 'nomeFinal' com o novo nome sorteado após o embaralhamento
            nomeFinal = listaSorteados[i];
        }

        // Adiciona o nome sorteado ao Set 'nomesJaSorteados' para garantir que ele não seja sorteado novamente
        nomesJaSorteados.add(nomeFinal);

        // Atualiza o conteúdo do elemento 'nomesSorteados' no HTML para exibir o par sorteado
        // Mostra quem tirou quem, no formato: "nome original --> nome sorteado"
        nomesSorteados.innerHTML += `<p id="lista-sorteio">${nomesAdicionados[i]}, --> ${nomeFinal}</p>`;
    }
}

// Função para embaralhar uma lista (array)
function embaralha(lista) {
    // Itera sobre a lista de trás para frente
    for (let indice = lista.length; indice; indice--) {
        // Gera um índice aleatório dentro dos limites do array
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // Troca o elemento atual com o elemento aleatório
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Função para reiniciar o sorteio, limpando todos os dados
function reiniciar() {
    // Limpa o array 'nomesAdicionados'
    nomesAdicionados = [];

    // Também limpa o array 'listaSorteados'
    listaSorteados = [...nomesAdicionados];

    // Limpa o campo de texto onde os nomes são digitados
    nomeDigitado = '';

    // Limpa o conteúdo da lista de amigos exibida na tela
    document.getElementById('lista-amigos').textContent = '';

    // Limpa o conteúdo da lista de sorteio exibida na tela
    nomesSorteados.textContent = '';
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = '';

    // Adiciona cada nome como um item clicável na lista
    nomesAdicionados.forEach((nome, index) => {
        let item = document.createElement('span');
        item.textContent = nome;
        item.style.cursor = 'pointer';
        item.onclick = () => removerAmigo(index);
        listaAmigos.appendChild(item);

        // Adiciona uma vírgula entre os nomes, exceto após o último nome
        if (index < nomesAdicionados.length - 1) {
            listaAmigos.appendChild(document.createTextNode(', '));
        }
    });
}

// Função para remover um nome da lista
function removerAmigo(index) {
    nomesAdicionados.splice(index, 1); // Remove o nome do array
    atualizarLista(); // Atualiza a lista exibida na tela
}

// Inicializa a lista de amigos na primeira vez que a página carrega
atualizarLista();
