// Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.

let lista1 = [1, 2, 3];
let lista2 = [4, 5, 6];
let novaLista = [1];

novaLista = novaLista.concat(lista1, lista2);
console.log(novaLista);

//Remova o último elemento de novaLista. Imprima novaLista após a remoção.
novaLista.pop(novaLista);
console.log(novaLista);

//Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.
function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Gera um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));

        // Troca os elementos nas posições i e j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

fisherYatesShuffle(novaLista);
console.log(novaLista);


function removerDuplicatas(array) {
    return [...new Set(array)];
  }
  
  let novaListaSemDuplicatas = removerDuplicatas(novaLista);
  console.log("Remover duplicatas:", novaListaSemDuplicatas);
  