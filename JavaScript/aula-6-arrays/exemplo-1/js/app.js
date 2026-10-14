/*
arrays em js 

variavel armazena apenas um valor
arrays armazena multiplos valores
*/


//exemplo 1
/*
let frutas = ["maça","banana" , "uva"]

console.log(frutas)
console.log(frutas[0])
*/

/*
let frutas = ["maça","banana" , "uva"]

for(let i = 0;i <= frutas.length;i++){

    console.log(frutas[i] + "\n")

}
    */


/*


//metodos de arrays


push()- adiciona um item
pop()- remove o item final
shift()- remove o inicio
unshift()-  adiciona  o item no inicio
lenght()- conta o tamanho do array
*/


//exemplo2
let frutas = ["maça","banana" , "uva"]

frutas.push("goiaba")
frutas.unshift("goiaba")
frutas.pop()

for(let i = 0;i <= frutas.length;i++){

    console.log(frutas[i] + "\n")

}
