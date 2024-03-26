function carregar() { 
    var msg = window.document.getElementById('msg')     
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora <= 12) {
        img.src = 'manha.png'
        document.body.style.background = '#aeb576'
} 
    else if (hora < 17) {
        img.src ='tarde.png'
        document.body.style.background = '#b09564'
}   else {  
        img.src ='noite.png'
        document.body.style.background= '#35314d'
    }
}

