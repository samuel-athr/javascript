var num = [9, 4, 3, 2, 8,]
num [5] = 5
num.push(7)
num.sort()
console.log(num)
console.log(`O vetor/array tem ${num.length} números`)
console.log(`O primeiro valor do vetor é igual a ${num[0]}`)
let valor = 9
let pos = num.indexOf(valor)
if (pos == -1){
    console.log(`o valor ${valor} não foi encontrado`)
} else {
    pos ++
    console.log(`o ${valor} está na posição ${pos}`)
}

