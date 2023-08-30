let array = ["valor1", "valor2", "valor3", "valor4", "valor5", ];

let object = { propieade1: "valor1", propiedade2: "valor2", propriedade3: "valor3", }


// FOR Executa uma função até que ela seja falsa
for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}
// FOR/in executa uma repetição a partir de uma propriedade // Com ARRAY    

/* for(let i in array){
    console.log(i);
}
//FOR IN em OBJECT
 
for(i in object){
    console.log(i);
}
 */

//FOR/OF repetição a partir de um valor

for(i of array){
    console.log(i);
}
// FOR/OF com objects não funciona 
for(i of object.propiedade2){
    console.log(i);
}

//WHILE executa uma instrução enquanto determinada consição for verdadeira
var a = 0;
while(a < 10){
    a++;
    console.log(a);
}
//DO WHILE Executa uma função "Até que" determinada condição seja falsa
do{
    a++;
    console.log(a);
}while(a < 10){
    console.log(a);
}

