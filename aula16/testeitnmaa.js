// Fatorial de 5 ou (!5) : 5x4x3x2x1 = 120
function fatorar(n){
    let res = 1
        for(let f = n ; f > 1; f-- )
        res *= f 
    // Mesma coisa que res = res * f
        return res
    }
console.log(fatorar(1))

        