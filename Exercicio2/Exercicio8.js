//8) Programa que receba duas notas de 6 alunos calcule e imprima: 

//• a média entre essas 2 notas de cada aluno;  
//• a mensagem de acordo com a tabela abaixo: 

//Média 		Mensagem 
//De 0  a 5.0  	reprovado 
//De 5.1 a 6.9 	recuperação 
//De 7.0  a  10  	aprovado 


var alunos = [[], [], [], [], [], []];

for (let i = 0; i < alunos.length; i++) {
    for (let j = 0; j < 2; j++) {
        alunos[i].push(Math.random() * 10);
    }
}

for (let i = 0; i < alunos.length; i++) {
    let media = ((alunos[i][0] + alunos[i][1]) / 2).toFixed(2);
    if (media >= 7.0) {
        console.log(`Aluno ${i + 1}: Sua média foi ${media}. Você está aprovado.`);
    } else if (media >= 5.0) {
        console.log(`Aluno ${i + 1}: Sua média foi ${media}. Você está de recuperação.`);
    } else {
        console.log(`Aluno ${i + 1}: Sua média foi ${media}. Você está reprovado.`);
    }
}
