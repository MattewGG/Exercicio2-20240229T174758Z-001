let idades;
let contador1 = 0
let contador2 = 0
let contador3 = 0
let contador4 = 0
let contador5 = 0
for (let index = 0; index < 15; index++) {
    idades = Math.floor(Math.random()*100);

    if(idades<=15){
        contador1= contador1+1
        console.log(contador1)
    }else if(idades<=30){
        contador2 = contador2+1
    }else if(idades<=45){
        contador3 = contador3+1
    }else if(idades<=60){
        contador4 = contador4+1
    }else{
        contador5 = contador5+1
    }   
}
console.log(`Existem ${contador1} pessoas entre 15 e 1 anos de idade, eles correspondem a ${((contador1/15)*100).toFixed(2)}% de todas as pessoas`)
console.log(`Existem ${contador2} pessoas entre 16 a 30 anos de idade, eles correspondem a ${((contador2/15)*100).toFixed(2)}% de todas as pessoas`)
console.log(`Existem ${contador3} pessoas entre 31 a 45 anos de idade, eles correspondem a ${((contador2/15)*100).toFixed(2)}% de todas as pessoas`)
console.log(`Existem ${contador4} pessoas entre 46 a 60  anos de idade, eles correspondem a ${((contador4/15)*100).toFixed(2)}% de todas as pessoas`)
console.log(`Existem ${contador5} pessoas acima de 61 anos, eles correspondem a ${((contador5/15)*100).toFixed(2)}% de todas as pessoas`)