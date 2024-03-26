function Contar(){
    let selectTab = document.getElementById('seltab')
    let num = document.getElementById('txtnum')
    if (num.value.length == 0 ){
        window.alert('Digite um número')
    } else {
        selectTab.innerHTML=('')
        let n = Number(num.value)
        let c = 1
        for ( c ; c <= 10 ; c++){
            let item = document.createElement ('option')
            item.text = ` ${n} x ${c} = ${n*c} `
            selectTab.appendChild(item)

        }
    }
}