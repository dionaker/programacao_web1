//paragrafo.textContent = "paragrafo atualizado"
    let paragrafo = document.getElementById("primParag")
    let div = document.getElementById("divi")
    let divcor = document.getElementById("div")



//paragrafo
function mudarParag(){

     paragrafo.textContent = "paragrafo atualizado"

}

function mudarCor(){

    paragrafo.style.color = "red"
      paragrafo.textContent = "cursou entrou do botao"
}
function mudarCorSaida(){

    paragrafo.style.color = "blue"
  paragrafo.textContent = "cursou saiu do botao"

}


//div

function corDiv(){

    div.style.backgroundColor = "pink"
    divcor.textContent = "cursor entrou na div"

}
function corDivSaida(){

    div.style.backgroundColor = "purple"
        divcor.textContent = "cursor saiu da div"


}
