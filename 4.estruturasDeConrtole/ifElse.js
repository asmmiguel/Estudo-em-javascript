const imprimeResultado = function (nota) {
    if(nota>=7){
        console.log('aprovado')
    }
    else {
        console.log('reprovado')
    }
}

imprimeResultado(10)
imprimeResultado(4)
imprimeResultado('oi?') //cuidado, JS é fracamento tipado