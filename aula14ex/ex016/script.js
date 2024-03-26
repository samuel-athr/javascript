function contar(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var Ninicio = Number(inicio)
    var Nfim = Number(fim)
    var Npasso = Number(passo)
    var res = document.getElementById('res')
    res.innerHTML = `Contando: <br>`
    let resultado = ''
    if (!inicio || !fim  || !passo) {
            window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    if ( Npasso < 1 ){
            res.innerHTML = (`O passo dever ser maior ou igual a 1!`)
    } else if ( Ninicio <= Nfim ) {
            for ( Ninicio ; Ninicio <= Nfim ; Ninicio = Ninicio + Npasso  ) {
                resultado = resultado + Ninicio + '\u{1F449}'
            } 
    } else {
            for ( Ninicio ;  Ninicio >= Nfim ; Ninicio = Ninicio - Npasso  ) {
                resultado = resultado  + Ninicio + '\u{1F449}'
            } 
    }
    
    res.innerHTML += `${resultado}`
    res.innerHTML += '\u{1F3C1}'
}
