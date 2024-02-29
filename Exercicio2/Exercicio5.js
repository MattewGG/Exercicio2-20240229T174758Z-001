//5) Faça uma Programa que receba a idade e a altura de várias pessoas. 
//Calcule e imprima a média das alturas das pessoas com mais de 50 anos. Para encerrar a entrada de dados, digite idade <= zero.

const read = require('readline-sync')
// codigo ativado pelo temrminal, node tab nome do arquivo para ativar
// lembrar de instalar o modolo readline-sync para funcionar e chamar ele 

//let nome = read.question("digite o nome: ")

let contador1 = 0;
let alturaTotal = 0;
let pare = 1;

do {
    const idade = Math.random() * 100;
    const altura = Math.random() + 1.40;

    if (idade >= 50) {
        contador1++;
        alturaTotal += altura;
        if (contador1 === 5) {
            pare = read.questionInt("Quer continuar recebendo valores? Digite 0 para NÃO ou 1 para SIM: ");
        }
    } 

} while (pare !== 0);


    console.log("A média de altura para pessoas com mais de 50 anos é: " + (alturaTotal/contador1).toFixed(2));

    
