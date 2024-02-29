
let read = require('readline-sync');
let dados = [];
let continuar = true;

while (continuar) {
    let canal = read.questionInt("Digite o numero do canal (4, 5, 7, 12), ou digite 0  para encerrar: ");
    
    if (canal  === 0) {
        continuar = false;
    } else {
        if (![4, 5, 7, 12].includes(canal)) {
            alert("Número do canal inválido. Por favor, digite 4, 5, 7 ou 12. ");
            continue;
        }

        let pessoas = read.questionInt(`Quantas pessoas estavam assistindo ao canal ${canal}? `);
        dados.push({ canal, pessoas });
    }
}

console.log("Dados da pesquisa:");
console.log(dados);
