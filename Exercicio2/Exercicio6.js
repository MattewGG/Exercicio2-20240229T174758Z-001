
//6) Em um campeonato de futebol, cada time tem uma lista oficial de 23 jogadores. 
//Cada time prepara uma lista contendo o peso e a idade de cada um dos seus jogadores. 
//Os 40 times que participam do torneio enviam essas listas para o CPD da confederação. Faça uma Programa que apresente as seguintes informações: 
//• peso médio e a idade média de cada um dos times; 
//• peso médio e a idade média de todos os participantes



let maxPeso1 = 0;
let maxIdade1 = 0;

let maxPeso2 = 0;
let maxIdade2 = 0;

for (let index = 0; index < 23; index++) {
    let idades1 = (Math.random()*50);
    maxIdade1 += idades1
    let peso1 = (Math.random()*125);
    maxPeso1 += peso1


    let idades2 = (Math.random()*100);
    maxIdade2 += idades2
    
    let peso2 = (Math.random()*125);   
    maxPeso2 += peso2
}

console.log(`Peso medio do Flamengo ${(maxPeso1/23).toFixed(2)} idade media dos jogadores ${(maxIdade1/23).toFixed(2)}`)
console.log(`Peso medio do Vasco ${(maxPeso2/23).toFixed(2)} idade media dos jogadores ${(maxIdade2/23).toFixed(2)}`)