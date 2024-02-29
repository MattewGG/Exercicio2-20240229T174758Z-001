//2) Faça um Programa que receba a idade e o peso de 15 pessoas. Calcule e imprima as médias dos pesos das pessoas da mesma faixa etária. 
//As faixas etárias são: de 1 a 10 anos, de 11 a 20 anos, de 21 a 30 anos e maiores de 30 anos.

let contador1 = 0
let contador2 = 0
let contador3 = 0
let contador4 = 0
let contador5 = 0
let peso10 = 0
let peso20 = 0
let peso30 = 0
let peso31 = 0
for (let index = 0; index < 15; index++) {
    let idades = (Math.random()*100);
    let peso = (Math.random()*100);
    if(idades<=10){
        contador1= contador1+1
        peso10=peso10+peso;
    }else if(idades<=20){
        contador2 = contador2+1
        peso20+=peso;
    }else if(idades<=30){
        contador3 = contador3+1
        peso30+=peso;
    }else{
        contador4++; // Incrementando o contador para a faixa etária de 31 anos ou mais
        peso31 += peso;
    }   
}

console.log(`A media de peso entre 1 a 10 anos é: ${(peso10/contador1).toFixed(2)}`);
console.log(`A media de peso entre 11 a 20 anos é: ${(peso20/contador2).toFixed(2)}`);
console.log(`A media de peso entre 1 a 10 anos é: ${(peso30/contador3).toFixed(2)}`);
console.log(`A media de peso entre 1 a 10 anos é: ${(peso31/contador4).toFixed(2)}`);