document.querySelector('img#porta-1').addEventListener('click', function(){
    document.querySelector('img#porta-1').style.opacity = '0'
    document.querySelector('img#porta-2').style.opacity = '0'
    document.querySelector('img#porta-3').style.opacity = '0'

    document.querySelector('img#porta-1').style.visibility = 'collapse'
    document.querySelector('img#porta-2').style.visibility = 'collapse'
    document.querySelector('img#porta-3').style.visibility = 'collapse'

    foto = document.querySelector('.foto1')
    foto.classList.add('porta-1')
    
})
document.querySelector('img#porta-2').addEventListener('click', function(){
    document.querySelector('img#porta-1').style.opacity = '0'
    document.querySelector('img#porta-2').style.opacity = '0'
    document.querySelector('img#porta-3').style.opacity = '0'

    document.querySelector('img#porta-1').style.visibility = 'collapse'
    document.querySelector('img#porta-2').style.visibility = 'collapse'
    document.querySelector('img#porta-3').style.visibility = 'collapse'

    foto = document.querySelector('.foto2')
    foto.classList.add('porta-2')

})
document.querySelector('img#porta-3').addEventListener('click', function(){
    document.querySelector('img#porta-1').style.opacity = '0'
    document.querySelector('img#porta-2').style.opacity = '0'
    document.querySelector('img#porta-3').style.opacity = '0'

    document.querySelector('img#porta-1').style.visibility = 'collapse'
    document.querySelector('img#porta-2').style.visibility = 'collapse'
    document.querySelector('img#porta-3').style.visibility = 'collapse'

    foto = document.querySelector('.foto3')
    foto.classList.add('porta-3')
})

