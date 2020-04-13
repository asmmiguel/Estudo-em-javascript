let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)// !! negação pode ser usado para transformar o mumero um em bool, nesse caso usou duas negaçoes para retornar true

console.log('os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!'')//string vazia retorna false
console.log(!!' ')//string com um espaço
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(isAtivo = true)

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!(''|| null || 0 || ' '))