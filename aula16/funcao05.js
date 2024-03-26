// Fatorial de 5 ou (!5) : 5x4x3x2x1 = 120
// !5 = 5 x !5-1
// !n = n x !n-1 
function fatorar (n) {
    if (n == 1){
        return 1
    }else{
        return n * fatorar(n-1)
}
}
console.log(fatorar(4)) 