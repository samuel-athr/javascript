function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var ano = window.document.getElementById('txtano')
    var Homem = window.document.getElementById('masc')
    var Mulher = window.document.getElementById('fem')
    
    if (ano.value.length == 0 || ano.value > anoatual) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        res = window.document.getElementById('res')
        var sexo = window.document.getElementsByName('genero')
        var idade = anoatual - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'criançaM.png') 
        } else if(idade < 21){
                //adolescente
                img.setAttribute('src', 'adolescenteM.png')
        } else if(idade < 35){
                //adulto
                img.setAttribute('src', 'adultoM.png')
        } else {
                //idoso
                img.setAttribute('src', 'idosoM.png')
        }              
    }   else if (sexo[1].checked) {
        genero = 'Mulher'
            if (idade >= 0 && idade < 10 ){
            //criança
            img.setAttribute('src', 'criançaF.png')
        } else if(idade < 21){
            //adolescente
            img.setAttribute('src', 'adolescenteF.png')
        } else if(idade < 35){
            //adulto
            img.setAttribute('src', 'adultoF.png')
        } else {
            //idoso
            img.setAttribute('src', 'idosoF.png')
    }              
    }
    res.innerHTML=(`${genero} de ${idade} anos`)
    res.appendChild(img)
// Centralizar a imagem
    //img.style.display = 'block'
    //img.style.margin = 'auto'
    img.style.alignItems = 'center'
    }  
}
