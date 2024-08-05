// let jogosAlugados = [];

function alterarStatus(jogo1) {
    let monopoly = document.getElementById('game-1');



    if (monopoly.classList.contains('dashboard__item__button')) {
        monopoly.classList.remove('dashboard__item__button');
        monopoly.classList.add('dashboard__item__button dashboard__item__button--return');
    }   
    
    else if(monopoly.classList.contains('dashboard__item__button dashboard__item__button--return')){
        monopoly.classList.remove('dashboard__item__button dashboard__item__button--return');
        monopoly.classList.add('dashboard__item__button');
    }

    return jogo1;
}

// function alugar() {
//     jogosAlugados.push(jogo)
// }