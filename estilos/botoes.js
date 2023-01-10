botaoEscolha = document.getElementById("duvida")

botaoEscolha.addEventListener("click", function(){
    if(document.getElementById("certo").checked) {
        document.querySelector('button#duvida.botao').style.display = "none"
        document.querySelector('button#continuar.botao').style.display = "block"

        document.getElementById('certo_inp').style.color = 'green'
        document.getElementById('certo_inp').innerText = "RESPOSTA CORRETA !!!"

    }else{
        document.getElementById("duvida").style.display = "none"
        document.querySelector('button#voltar.botao').style.display = "block"

    }
})

