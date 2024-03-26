let numeros = [1, 3, 6, 4, 9, 7]
let pos = 0
numeros.sort()
console.log(numeros)
/* 
for (pos = 0; pos < numeros.length; pos++){
    console.log(`O vetor de posição ${pos} tem valor igual a ${numeros[pos]}`)
} 
*/
for (pos in numeros){
    console.log(`O vetor de posição ${pos} tem valor igual a ${numeros[pos]}`)
}
