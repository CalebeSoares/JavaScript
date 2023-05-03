function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    var minutes = data.getMinutes()
    var seconds = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minutes} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#8e3b09'
    } else if (hora >=12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#b97b4d'
    } else{
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#382e4d'
    }

}
