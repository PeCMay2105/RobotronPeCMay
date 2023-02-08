const robo= document.querySelector(".robo")
const braco= document.querySelector("#braco")


const ajuste= document.querySelectorAll("[data-ajuste]")
const estatisticas= document.querySelectorAll("[data-estatistica]")



//chama a função do contador mediante ao clique numa região específica

ajuste.forEach(function(classe){
    classe.addEventListener("click",function(evento){
        manipulaContador(evento.target.dataset.ajuste, evento.target.parentNode)
        atualizaDados(evento.target.dataset.peca)
/*         console.log(evento.target)
        console.log(evento.target.textContent) */
    })
})

//altera o valor do contador
function manipulaContador(algo, ajuste){
    const contador = ajuste.querySelector("[data-controle]")

    if(algo === "+" ){
        contador.value=parseInt(contador.value) + 1
    } else{ 
        contador.value=parseInt(contador.value) - 1
    }

}

function atualizaDados(peca){
    console.log(pecas[peca])
    estatisticas.forEach(function(elemento){
        
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}


