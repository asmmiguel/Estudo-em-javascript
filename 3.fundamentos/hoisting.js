console.log('a =', a)
var a = 2
console.log('a =', a)

/*a lógica é
var a                 hoisting
console.log('a =', a)
a = 2
console.log('a =', a)
*/

//var a = 2  //se comentar esse var, o resultado é variável não definida

console.log('b =', b)
let b = 2
console.log('b =', a)
//gera erro dizendo não pode acessar b antes da inicialização, não ocorre hoisting com let