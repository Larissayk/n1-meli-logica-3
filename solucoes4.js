// const complex = [
//     {user:234, name: 'Marcia', idade:40, hobbies: ['dançar', 'comer', 'falar']},
//     {user:235, name: 'Lorena', idade:20, hobbies: ['dançar', 'assistir tv', 'estudar']},
//     {user:236, name: 'Patricia', idade:24, hobbies: ['correr', 'acampar', 'surfar']},
//     {user:237, name: 'Mariana', idade:15, hobbies: ['skate', 'bicicleta', 'break dance']},
//     {user:238, name: 'Isis', idade:34, hobbies: ['ler', 'escrever', 'discutir']},
//     {user:239, name: 'Pietra', idade:23, hobbies: ['jogar dominó', 'sinuca', 'cartas']}
// ]

// complex[complex.length-1].name[1]

// ----------------------------------------------------------------------------------
// const arr = [1,2,3,4,5,6]


// const novaArr = arr.map(function(item){
//     return item +2
// })

// novaArr


// 1- Crie uma função construtora para Terreno, cada terreno deve ter:
// largura, comprimento, area(largura x comprimento)


function Terreno (largura,comprimento,area){
    this.largura = largura;
    this.comprimento = comprimento;
    area = comprimento*largura;
    this.area = area;
}

const Terreno1 = new Terreno(70,100,0)
// console.log(Terreno1.area)

// function Terreno (largura,comprimento){
//     this.largura = largura;
//     this.comprimento = comprimento;
//     this.area = largura*comprimento;
// }


// 2 crie métodos usando o prototype, eles devem ser:
// - calcularPreco -> que vai ser a area x 1000 reais.
// - mostrarInfos -> que mostrar a area e o preço do terreno.

Terreno.prototype.calcularPreco = function(){
   this.preco = this.area*1000
};


Terreno.prototype.mostrarInfos = function(){
    console.log(`A área do terreno é ${this.area} e o seu valor é ${this.preco}`)
}


// 3 - Crie 5 instancias do terreno, usando o operador new. ex: const t1 = new Terreno(arg1, arg2)

const t1 = new Terreno(30,20)
const t2 = new Terreno(40,30)
const t3 = new Terreno(50,40)
const t4 = new Terreno(60,10)
const t5 = new Terreno(70,10)

// console.log(t3)

// 4 - use a função calcular preco para que todas as instancias tenham seus precos.

t1.calcularPreco()
t2.calcularPreco()
t3.calcularPreco()
t4.calcularPreco()
t5.calcularPreco()

// 5 - crie uma array vazia chamada terrenos.

const terrenos =[]

// 6 - insira as instancias criadas(que os precos já tenham sido calculados) na array terrrenos.

terrenos.push(t1,t2,t3,t4,t5)
// console.log(terrenos)



// 7 - Imprima na tela o último terreno da array terrenos.

const ultimoTerreno = terrenos[terrenos.length-1]
// console.log(`Último Terreno: ${ultimoTerreno}`)
// console.log(ultimoTerreno)



// 8 - Imprima a area do terceiro item da array terrenos

const terceiroTerreno = terrenos[2].area
// console.log(`Área do Terceiro Terreno: ${terceiroTerreno}`)



// 9 - Usando um loop, execute o método mostrarInfos de todos os terrenos.

// for (const item of terrenos){
//     console.log(item.mostrarInfos())
// }

// for(let i=0; i< terrenos.length; i++){
//     console.log(terrenos[i].mostrarInfos())
// }

// 10 - Crie uma função que vai receber a array de objetos e vai ordenar a lista do mais barato para o mais caro.
function terrenosOrdenados (arrTerrenos) {
    const ordenados = arrTerrenos.sort(function(a,b) {
        return a.preco - b.preco
    })
    console.log(ordenados)
    console.log(ordenados[0], ordenados[ordenados.length-1])
}

terrenosOrdenados(terrenos);


// 11 - Crie uma função que Imprima o mais barato


// 12 - Crie uma função que Imprima o mais caro.
