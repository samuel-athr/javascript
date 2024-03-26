let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#selnum')
let res = document.querySelector('div#res')
let valores = []
// Verifica se o número esta entre 1 e 100
function IsNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
// Verfica se o número esta na lista;
function Inlista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
// Function que ativa as verificações
function Adicionar() {
    if (IsNumero(num.value) && !Inlista(num.value, valores)){
        valores.push(Number(num.value))
        var tab = document.createElement('option')
        tab.text = `O número ${num.value} foi adicionado`
        lista.appendChild(tab)
        res.innerHTML= ''
    } else {
        window.alert('Verifique os números e tente novamente!')
}
    num.value = ''
    num.focus()  
}           
//Compila e mostra as informações
function finalizar(){
    if ( valores.length == 0) {
        alert('Adicione um número')
    } else if (valores.length == 1){ 
            res.innerHTML = `<p>Ao todo temos ${valores.length} número</p>`
            valores.sort((a, b) => a - b )
            let maior = Number(valores.length) - 1
            res.innerHTML += `<p>O maior valor informado foi ${valores[maior]} </p>`
            console.log(valores[maior])
            res.innerHTML += `<p>O menor valor informado foi ${valores[0]} </p>`
            let soma = 0
            let pos = 0
            for (pos in valores){
                soma += valores[pos]
            }
            res.innerHTML += `<p>A soma de todos os valores informados é ${soma} </p>`
            media = soma / valores.length
            console.log(media)
            res.innerHTML += `<p>A média dos valores é igual a ${media} </p>` 
        } else {
            res.innerHTML = `<p>Ao todo temos ${valores.length} números</p>`
            valores.sort((a, b) => a - b )
            let maior = Number(valores.length) - 1
            res.innerHTML += `<p>O maior valor informado foi ${valores[maior]} </p>`
            console.log(valores[maior])
            res.innerHTML += `<p>O menor valor informado foi ${valores[0]} </p>`
            let soma = 0
            let pos = 0
            for (pos in valores){
                soma += valores[pos]
            }
            res.innerHTML += `<p>A soma de todos os valores informados é ${soma} </p>`
            media = soma / valores.length
            console.log(media)
            res.innerHTML += `<p>A média dos valores é igual a ${media} </p>`
           
        }
    }



