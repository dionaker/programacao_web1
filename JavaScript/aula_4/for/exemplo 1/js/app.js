console.log("bem vindo a nossa tabuada")

//estrutura do for

/*se divide em tres partes

1-variavel portadora
2-condiçao
3-incremento

*/

/*
for(let i = 1; i <= 5;i++){

    console.log(`${i}° volta do loop`)
    
}
*/
/*
alert(`bem vindo a tabuada`)
let escolha = Number(prompt("escolha um numero da sua tabuada"))
for(let i = 0;i <=10;i++){

alert(`${escolha} x ${i} = ${escolha * i}\n`)

}
*/

//controles de loops
//break para o loop


//break para quando atender a uma condicao
/*
alert(`bem vindo a tabuada`)
let escolha = Number(prompt("escolha um numero da sua tabuada"))
for(let i = 0;i <=10;i++){
if(i == 5){
    break
}
alert(`${escolha} x ${i} = ${escolha * i}\n`)

}
*/

//continue - serve para pular a proxima instrucao mas mantem o loop

alert(`bem vindo a tabuada`)
let escolha = Number(prompt("escolha um numero da sua tabuada"))
for(let i = 0;i <=10;i++){
if(i == 5){
    continue
}
alert(`${escolha} x ${i} = ${escolha * i}\n`)

}