var carta = document.querySelectorAll('.conteudo')

carta.forEach(movimento => {
    var mensagem = document.querySelector(".carta")
    movimento.addEventListener('click', function(){
        mensagem.classList.add('aberta')
        document.querySelector('img#pena').style.marginTop = '-300px'
    })
})
