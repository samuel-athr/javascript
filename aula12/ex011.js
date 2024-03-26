var idade = 81
if (idade < 16 ){
    console.log('Não vota')
} else if (idade < 18 || 65 < idade) {
    console.log('Voto não obrigatório')
} else {
    console.log('Voto obrigatório')
}