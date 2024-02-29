//7) Uma empresa decidiu fazer um levantamento em relação aos candidatos que se apresentarem para preenchimento de vagas no seu quadro de funcionários. 
//Supondo que você seja o programador dessa empresa, faça uma Programa que leia para cada candidato a idade, o sexo (M=1 ou F=2) e a experiência no serviço (S=1 ou N=2). 
//Para encerrar a entrada de dados, digite zero para a idade. Calcule e escreva: 
//• número de candidatos do sexo feminino; 
//• número de candidatos do sexo masculino; 
//• a idade média dos homens que já têm experiência no serviço;  
//• a porcentagem dos homens com mais de 45 anos entre o total dos homens;  
//• número de mulheres com idade inferior a 35 anos e com experiência no serviço;  
//• a menor idade entre as mulheres que já têm experiência no serviço.

// codigo ativado pelo terminal 

const read = require('readline-sync')

let contadorM = 0;
let contadorF = 0;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;
let idade = 0;
let contadorexm =0;
let contadorexf =0;
let contador1xp = 0;
let contador2xp = 0;
let contador3xp = 0;
let contador4xp = 0;
let contador5xp = 0;
let contador6xp = 0;

let maxIdade1xp = 0;
let maxIdade2xp = 0;
let maxIdade1 = 0;
let maxIdade2 = 0;

do {
    
    let sexo = read.question("Qual seu sexo? M ou F: ");
    idade = read.questionInt(" Qual sua idade?: ");
    let experiencia = read.question("Tem experiência no serviço? S ou N: ");
    
    if (idade != 0) {
        if (experiencia.toLowerCase() === "s" ) {
            if (sexo.toLowerCase() === "m") {
                contadorexm++;
                contadorM++;
                maxIdade1xp += idade;
                if (idade <= 25) {
                    contador1xp++;
                    console.log("Tem experiência ");
                } else if (idade <= 30) {
                    contador2xp++;
                } else if (idade >= 45) {
                    contador3xp++;
                }
            } else {
                contadorexf++;
                contadorF++;
                maxIdade2xp += idade;
                if (idade <= 20) {
                    contador4xp++;
                    console.log(contador4);
                } else if (idade <= 30) {
                    contador5xp++;
                } else if (idade >= 45) {
                    contador6xp++;
                }
            }
        } else {
            if (sexo.toLowerCase() === "m") {
                contadorM++;
                maxIdade1 += idade;
                if (idade <= 20) {
                    contador1++;
                    console.log(contador1);
                    console.log("Tem experiência ");
                } else if (idade <= 30) {
                    contador2++;
                } else if (idade >= 45) {
                    contador3++;
                }
            } else {
                contadorF++;
                maxIdade2 += idade;
                if (idade <= 20) {
                    contador4++;
                    console.log(contador4);
                } else if (idade <= 30) {
                    contador5++;
                } else if (idade >= 45) {
                    contador6++;
                }
            }
        }
    }
} while (idade != 0);

console.log("Numero de mulheres candidatas " + contadorF)
console.log("Numero de cantidatos homens " + contadorM)