//4) Faça uma Programa que receba, como entrada, uma lista de números positivos ou negativos finalizada com o número zero e forneça, 
//como saída, a soma dos números positivos, a soma dos números negativos e a soma das duas somas parciais. 



var lista = [12, 34, -12, -46, 0];
let somaPos = 0;
let somaNes = 0;

for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    if (element > 0) {
        somaPos += element;
    } else {
        somaNes += element;
    }
}

console.log("Soma positivos: ", somaPos, ", Soma negativos: ", somaNes, ", Soma total: ", somaPos + somaNes);