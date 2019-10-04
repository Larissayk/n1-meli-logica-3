// // 1.
// // Defina um objeto de
// // Javascript que descreva
// // um dos pokemons da lista
// // de pokemons do Wikipedia.
// // com pelo menos 4 propriedades e 1 método
// // ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

// const pokemon = {};
// pokemon.codigo = 001;
// pokemon.nome = "Bulbasaur";
// pokemon.nomeJapones = "Fushigidane";
// pokemon.tipo = "planta";
// pokemon.evolucao1 = "Ivysaur";
// pokemon.evolucao2 = "Venusaur";
// pokemon.apresentacao = function() {
//   console.log(
//     `Meu nome é ${pokemon.nome}, sou do tipo ${pokemon.tipo} e minha evolução final é ${pokemon.evolucao2} `
//   );
// };

// // console.log(pokemon);
// // console.log(pokemon.apresentacao());

// // 2.
// // Printe no console a seguinte
// // frase: "Oi, meu nome é  < >.
// // e meu nome japones é < >."

// pokemon.falar = function() {
//   console.log(
//     `Oi, meu nome é  ${pokemon.nome} e meu nome japones é ${pokemon.nomeJapones}`
//   );
// };

// // console.log(pokemon.falar());

// // 3.
// // Adicione uma nova propriedade ao
// // seu pokemon chamada `sabe_voar`
// // (ou algo do tipo) e defina
// // ela como `true` ou `false`.

// pokemon.saberVoar = false;

// // console.log(pokemon);

// // 4.
// // Adicione um método ao seu pokemon
// // chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// // To voaaaaaando!".

// pokemon.voar = function() {
//   if (pokemon.saberVoar == true) {
//     console.log(`To voaaaaaando!`);
//   } else {
//     console.log("Desculpa, nao sei voar.");
//   }
// };

// console.log(pokemon.voar());

// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".

// pokemon.action = function() {
//     const frase = ["lutar", "correr","gritar"]
//     const rand = Math.floor(Math.random() * frase.length)
//    return frase[rand]
// }
   

// pokemon.action();

// // 6.
// // Adicione um método chamado
// // `pergunta` ao seu pokemon que printa
// // no console "O que o  < > vai fazer?" e
// // retorna o resultado do metodo
// // `acao`.

// pokemon.pergunta = function() {
//   console.log(`O que o ${pokemon.nome} vai fazer?`);
//   console.log(pokemon.action());
// };

// console.log(pokemon.pergunta());

// 7.
// Printe todas as propriedades
// do seu pokemon no console.

// console.log(Object.keys(pokemon));

// 8.
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor



  // for (const key in pokemon) {
  //   console.log(`Chave:${key}| valor:${pokemon[key]}`)
  // }


  
//9 Faça uma função construtora de pokemon

function Pokemon(nome, nomeJapa, evolucao) {
  this.nome = nome
  this.nomeJapa = nomeJapa
  this.evolucao = evolucao
}

const Pokemon1 = new Pokemon("charmander", "hitokage","ovo")

console.log(Pokemon1.nome);