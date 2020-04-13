//função sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma(2) //segundo valor é undefined, resposta NaN
imprimirSoma(2,3,4,5)//soma 2 primeiros e ignora o resto, e tambem não reclama 
imprimirSoma()

//função com retorno
function soma(a, b = 0) {
    return a + b 
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) //NaN porque o primeiro não foi tratado

