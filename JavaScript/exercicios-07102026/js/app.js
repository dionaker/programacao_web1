
/*

atividade 1

let nome = prompt("Qual o seu nome?")
let not1 = Number (prompt("digite sua primeira nota:"))
let not2 = Number (prompt("digite sua segunda nota: "))


let notf = Number(not1 + not2)/2
if(notf >= 6){
 alert("parabens pela aprovacao " + nome + " sua nota: " + notf)
}
else{
    alert("voce foi reprovado " + nome + " sua nota: " + notf)
}
*/

/*

atividade 2

alert("escolha seu combo")
let combo = Number (prompt(" 1 para:combo bug(hamburguer + refri);2 para:combo deeploy(pizza + suco),3 para:combo senior(salada + agua)"))
switch (combo){

    case 1:
        alert("seu combo escolhido foi o combo bug(hamburguer + refri)")
    break

    case 2:
        alert("seu combo escolhido foi o combo deploy(pizza + suco)")
        break

    case 3:
        alert("seu combo escolhido foi o combo senior(salada + agua)")
        break

        default:
            alert("nenhuma escolha")
}
 */

let idade = Number (prompt("Qual a sua idade? "))

if(idade < 18){
    alert("acesso bloqueado!!")
}else{
    alert("voce é maior de idade,entao segue")
    let plano = Number (prompt("qual voce quer ser?,1 para basico,2 para pro e 3 para vip"))
    switch (plano){
    case 1:
        alert("voce escolheu o plano basico")
    break

    case 2:
        alert("voce escolheu o plano pro")
    break
    
    case 3:
        alert("voce escolheu o plano vip")

    break

    default:
        alert("nenhum plano escolhido")
}
}


