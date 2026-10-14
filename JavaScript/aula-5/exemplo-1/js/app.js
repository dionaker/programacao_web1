//funcoes em js


//funcoes sao blocos de codigo reutilizaveis

//funcao simples
/*
console.log("funcao simples")
function saudacao(){

}
saudacao()
*/


//funcao com parametro
/*
let nomeUser = prompt("qual é o seu nome?")
function saudacao2(nome){

console.log(`seja bem vindo ${nome}`)
 
}
saudacao2(nomeUser)
*/


//exemplo  - funcao com parametro e retorno
/*
function soma(num1,num2){

return num1 + num2

}
console.log(`a soma dos numeros é + ${soma(4,3)}`)
*/


//exemplo 3-arrow function
let soma = (num1 , num2) => {
return num1 + num2

}
console.log(`a soma com arrow é: ${soma(10,10)}`)

