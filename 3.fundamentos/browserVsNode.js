/*

acesso ao contexto global

-window
-this : pode variar dependendo de quem chamou

this === window
>true

var a = 123

window.a
>123

thiis.a
>123

var a = 'texto'

window.a
>'texto'

this.a
>123

let b = 123

window.b
>undefined

let b = 333
> has been declared

this.b
>undefinid

const c = 123

window.c
>undefined

cuidado com variáveis de escopo global
constantes e variáveis declaradas com let não irao diretamente para window, ficam em memória


let pessoa = {nome:'ana', falar: funcional() {return 'eru sou ${this.nome}'}}

pessoa.falar()
'eu sou ana'

this.nome
undefined

this === window
true

quando estiver dentro do contexto de um objeto, this vai apontar para o próprio objeto

pessoa
{nome:'ana', falar: f}

pessoa.verificarEscopo = funcion() { return this === window}

pessoa.verificarEscopo()
>false

this não é iugaul a window, mas sim a pessoa

*/

let a = 3  //variavel fica local
global.b = 123
this.c = 555
this.d = false
this.e = 'teste'

console.log(a)
console.log(this.a)
console.log(global.a) //global no node equivale a window
console.log(global.b)
console.log(this.c)
console.log(module.exports.c) // também é igual a module.exports
console.log(module.exports === this )
console.log(module.exports)


//criando variável ser var e let

abc = 3 //não fazer isso

console.log(global.abc)

//esse tipo de declaração insere uma variável diretamente no objeto global do node, não fazer isso

//module.exports = {e:909, f: false, g:'teste'}


