//armazenando função em uma variável

const imprimirSoma = function (a, b) {
    console.log(a+b)
}
imprimirSoma(2, 3)

//armazenar uma função arrow em uma variável
//forma reduzida de construir uma função

const soma = (a, b) => {
    return a + b 
}
console.log(soma(2, 3))

//retorno implícito, retorna valor sem rpecisar de return

const subtracao = (a, b) => a - b //funão sem {} tem uma única linha e executa ela e retorna resultado
console.log(subtracao(3, 2))

const imprimir2 = a => console.log(a) //ex de função com um único parâmetro 
imprimir2('legal')