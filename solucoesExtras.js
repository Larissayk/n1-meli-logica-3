// use Map, filter, forEach, find e ou Reduce.

//1

// retorne numeros multiplos de 3
// retorne numeros multiplos de 3 e de 5

// const numbers = [
//   1,  3,  4,  6,  8,  9,  56,  34,  23,  2,  89,  101,  320,  12,  13,  45,  40,  43,  88]

// const multiplo3 = numbers.filter(function(item) {
//     return item%3 == 0;
// })

// console.log(`Multiplo de 3: ${multiplo3}`);

// const multiplo3e4 = numbers.filter(function(item) {
//     return item%3 ==0 && item%5 ==0;
// })
// console.log(`Multiplo de 3 e de 5: ${multiplo3e4}`);

//2

// retorne palavras que tenham menos de 5 letras

const palavrinhas = [
  "bolacha",
  "biscoito",
  "bombom",
  "bala",
  "abestalhado",
  "MASSA",
  "pastilha"
];

const menos5Letras = palavrinhas.filter(function(item) {
  return item.length < 5;
});

// console.log(menos5Letras);

//3

// // itere pela array modificando todos os items, multiplicando eles por 3.
// // depois prite quantos numeros são maiores que 10
// // depois quantos são menores que 10.
// // printe o numero menor que 10.
const numbers = [3, 4, 5, 6, 6, 7];

const multiplicado3 = numbers.map(function(item) {
  return item * 3;
});
const maior10 = multiplicado3.filter(function(item) {
  return item > 10;
});
const menor10 = multiplicado3.filter(function(item) {
  return item < 10;
});

// console.log(`Multiplicado por 3: ${multiplicado3}`);
// console.log(' Maiores que 10:' + maior10);
// console.log(' Menores que 10:' + menor10);

//4

// calcule o valor total da soma dos items da array numbers

const numbers1 = [
  1,
  3,
  4,
  6,
  8,
  9,
  56,
  34,
  23,
  2,
  89,
  101,
  320,
  12,
  13,
  45,
  40,
  43,
  88
];

const soma = numbers1.reduce(function(total, num) {
  return total + num;
});
// console.log(soma);

//5 -
//
// retore a mulher que tiver o user = 238
// retorne o nome das mulheres que gostam de estudar

const mulheres = [
  {
    user: 234,
    name: "Marcia",
    idade: 40,
    hobbies: ["estudar", "comer", "falar"]
  },
  {
    user: 235,
    name: "Lorena",
    idade: 20,
    hobbies: ["dançar", "assistir tv", "estudar"]
  },
  {
    user: 236,
    name: "Patricia",
    idade: 24,
    hobbies: ["correr", "acampar", "surfar"]
  },
  {
    user: 237,
    name: "Mariana",
    idade: 15,
    hobbies: ["skate", "bicicleta", "break dance"]
  },
  {
    user: 238,
    name: "Isis",
    idade: 34,
    hobbies: ["ler", "estudar", "discutir"]
  },
  {
    user: 239,
    name: "Pietra",
    idade: 23,
    hobbies: ["jogar dominó", "sinuca", "cartas"]
  }
];

// const user238 = mulheres.find(function(item){      //pq nao funcionou com filtro
//     return item.user === 238
// })

// console.log('A mulher com ID 238:' + user238.name );

const estudiosas = mulheres.filter(
  item => item.hobbies.indexOf("estudar") > -1
);

console.log("Mulheres que gostam de estudar:" + estudiosas.name);
estudiosas.map(item => {
console.log(item.name);
});
