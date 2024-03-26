let familia = {nome: 'Mãe',
filho: 3,
 engravidar(f=0){
    console.log('Pariu!!')
    this.filho += f
}}
familia.engravidar(10)
console.log(`A ${familia.nome} tem ${familia.filho} filhos`)








