/* var jogador1 = 0;
var jogador2 = 1;
var placar;

// If ternário
jogador1 !== -1 && jogador2 !== -1 ? console.log("Jogadores Válidos!") :
console.log("Jogadores inválidos!");
   
// Usando If
    if (jogador1 > 0 && jogador2 ==0) {
        console.log("Jogador 1 marcou ponto");
        placar = jogador1 > jogador2;
    } 
    //Usando else if 
    else if (jogador2 > 0 && jogador1 == 0) {
        console.log("Jogador 2 marcou ponto");
        placar = jogador2 > jogador1;
    } 
    //Usando else
    else {
        console.log("Ninguém marcou ponto.")
    }

    switch(placar){
        case placar = jogador1 > jogador2:
            console.log("Jogador 1 ganhou.");
            break;
            case placar = jogador2 > jogador1:
                console.log("Jogador 2 ganhou");
                break;
                default:
                console.log("Niguém ganhou!")
    }

 // If aninhado
    /* if (jogador1 !== -1){
        if (jogador1 > 0) {
            console.log("Jogador 1 marcou ponto.");
        } else if (jogador2 > 0) {
            console.log("Jogador 2 marcou ponto.")
        } else {
            console.log("Ninguém marcou ponto.")
        }
}
    */





















