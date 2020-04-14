/*/exemplos de comandos no console:
const a = {name: 'teste'}
//undefined
//a
{name:'teste'}
const b = a
//undefined
b.name = 'opa'
//'opa'
a
{name:'opa'}
//b armazena o endereço do objeto na memória, a tambem, a = b iguala os endereços, se mudar a partir de a, b tambem muda e vice versa. Exemplo de atribuição por referência.

a=3
//não pode por a é uma constante

//supondo mudança de seção
let c = 3
//undefined
let b = c//undefined
//undefined
d++
//3
d
//4
c
//3
//nesse caso foi feito uuma cópia por valor, tipos primitivos, c e d tem valores independentes. */

let valor //não inicializada
console.log(valor)
//undefined - variavel não inicializada, porém, foi declarada
//console.log(valor2)
//ReferenceError: valor2 is not defined - não foi declarada dentro do programa

valor = null //ausência de valor
console.log(valor)
//o nulo faz sentido quando você quer que uma variável não aponte para um enderço de memória. 

//console.log(valor.toString())
//TypeError: Cannot read property 'toString' of null
//cuidado ao trabalhar com referencia de nulo

const produto = {}
console.log(produto.preco)
//não gera erro, produto definido, preço nao, undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco =undefined //evite usar undefined, deixar pra liguagem 
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço, ex:preço é zero porque é de graça e quer diferenciar entre preço zero e sem preço
console.log(!!produto.preco)
console.log(produto)