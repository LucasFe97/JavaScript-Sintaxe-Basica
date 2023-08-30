// O que são Vetores ou Arrays

// Como declarar um Array
/* let Array =["string", 5, false, "Teste"];
console.log(Array); */

// Pode guardar vários tipos de dados 
/* let Array = ["string", 5, true, ["Array1", 2, "teste"], ["Array2"], ["Array3"]];
console.log(Array); */

// forEach
/* Array.forEach(function(item, index){console.log(item,index)}); */

// Push adiciona um novo item no final do Array
/* Array.push("Novo item");
console.log(Array); */

//Pop remove item do final do array
/* Array.pop();
console.log(Array); */

//shift remove item do inicio do array

/* Array.shift();
console.log(Array); */

//Unshift adiciona item no inicio do array
/* 
Array.unshift("Novo item no inicio do array");
console.log(Array); */

//Indexof retona o índice de um valor

/* Array.indexOf("teste");
console.log(Array); */

//Splice remove ou substitui um item pelo índice

/* Array.splice(0, 3);
console.log(Array ); */

//Slice Retorna uma parte de um array existente
/* 
let novoArray = Array.slice(0, 3);
console.log(novoArray); */

//OBJETOS

let carro = {fabrincante: "Chevrolet", modelo: "Prisma", ano: 2007, Boolean: true, array: ["Usado"], parteIntena:{interiorCarro: "Conservado"}};
/* 
console.log(carro.parteIntena);

var fabricante = carro.fabrincante;
console.log(fabricante); */

var {fabrincante, modelo, ano, array} = carro;
console.log(fabrincante, modelo, ano, array);



       
