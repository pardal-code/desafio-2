///////////////////////////////////////VARIÁVEIS DE SALDO DE VITÓRIAS E DERROTAS///////////////////////////////////////////////////
let win = 50
let loss = 20 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let exitRank = ""
let exitComparetor = winOrLoss(win, loss)
getExit() // Retorna a função de saída após o cálculo das funções winOrLoss e rank
//////////////////////////////////////////////////////////FUNÇÃO DE OPERAÇÃO//////////////////////////////////////////////////////
function winOrLoss (win, loss){
    let comparetor = win - loss
    rank (comparetor)
    return comparetor
}
//////////////////////////////////////////////////////////FUNÇÃO DE COMPARADOR////////////////////////////////////////////////////
function rank(comparetor){

    switch(true){
        case comparetor < 10:
            return exitRank = "Ferro"
            break

        case comparetor = 11 && comparetor < 20:
            return exitRank = "Bronze"
            break

        case comparetor = 21 && comparetor < 50:
            return exitRank = "Prata"
            break

        case comparetor = 51 && comparetor < 80:
            return exitRank = "Ouro"
            break

        case comparetor = 81 && comparetor < 90:
            return exitRank = "Diamante"
            break

        case comparetor = 91 && comparetor < 100:
            return exitRank = "Lendário"
            break

        case comparetor => 101:
            return exitRank = "Imortal"
            break
    }
}
//////////////////////////////////////////////////////////FUNÇÃO DA SAÍDA/////////////////////////////////////////////////////////
function getExit(){
    if (win > loss){
        console.log("O Herói tem de saldo de " + exitComparetor + " vitórias" + " está no nível " + exitRank)
    }
    else{
        console.log("O Herói tem de saldo de " + exitComparetor + " derrotas" + " está no nível " + exitRank)
    }
}