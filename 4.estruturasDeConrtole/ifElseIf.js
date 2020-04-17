Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimeResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('quadro de honra')
    } else if(nota.entre(7, 8.99)){
        console.log('aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('recuperação')
    } else if(nota.entre(0, 3.99)){
        console.log('reprovado')
    } else {
        console.log('nota invalida')
    }           
    //console.log('fim')
}

imprimeResultado(10)
imprimeResultado(8.9)
imprimeResultado(6.55)
imprimeResultado(2.3)
imprimeResultado(-2)
imprimeResultado(11)