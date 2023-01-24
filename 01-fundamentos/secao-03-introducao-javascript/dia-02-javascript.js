let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

let soma = 0;
for ( let index = 0; index < numbers.length; index= index + 1 ){
    soma = soma + numbers[index];

}
console.log(soma);


let mediaAritmetica = (soma/numbers.length);
console.log(mediaAritmetica);

if (mediaAritmetica > 20) {
    console.log('valor maior que 20')
}
else {
    console.log('valor menor ou igual a 20')
}

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);



var valorImpar= 0;

for (let indexImpar = 0; indexImpar < numbers.length; indexImpar += 1) {
    if (numbers[indexImpar] % 2 !== 0 ) {
        valorImpar = valorImpar + 1 ;
        
    }
    
}
if (valorImpar === 0){
    console.log('nenhum valor ímpar encontrado ')
} else {
    console.log('há '+ valorImpar + ' números impares')
}


let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log('o menor numero é ' + smallestNumber);


let novoArray = [];

for (let index = 1; index <= 25; index += 1) {
  novoArray.push(index);
}

console.log(novoArray);


for (let index = 0; index < novoArray.length; index += 1) {
    console.log(novoArray[index] / 2);
  };

