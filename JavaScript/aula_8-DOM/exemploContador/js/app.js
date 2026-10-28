let valorelement = document.getElementById("valor")
let btmais = document.getElementById("mais")
let btmenos = document.getElementById("menos")

let contador = 0

btmais.addEventListener(`click`, ()=>{
    contador++
    valorelement.textContent = contador
})


btmenos.addEventListener(`click`, ()=>{
    contador--
    if(valorelement > 0){
        valorelement.style.color ="blue"
         valorelement.textContent = contador
    }
    else{
        valorelement.style.color ="red"
    valorelement.textContent = contador
    }
})
