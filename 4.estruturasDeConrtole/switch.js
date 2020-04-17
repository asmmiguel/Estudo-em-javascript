const imprimirResultado = function (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('quadro de honra')
            break
        case 8:
        case 7: //não dá pra traballhar com switch com ponto flutuante e nem com intervalos, limitado no switch é JS
            console.log('aprovado')
            break
        case 6: case 5: case 4:
            console.log('recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('reprovado')
            break
        default:
            console.log('nota invalida')    
        
    }
}

imprimirResultado(10)
imprimirResultado(6.55)
imprimirResultado(2.1)
imprimirResultado(2)
imprimirResultado(-1)
imprimirResultado(11)