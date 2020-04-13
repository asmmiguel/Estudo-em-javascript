const nome ='Rebeca'
const concatenacao ='Olá ' + nome + '!'
//tamplate string serve para quebar linha na string, considerar espaços, etc
const template = `
    Olá
    ${nome}!` //abre e fecha com crase, variávem vem em ${}
console.log(concatenacao, template)

console.log(`1 + 1 = ${1+1}`)//o que está etre chaves vai ser interpretado
const up = texto => texto.toUpperCase()//pode chamar função dentro de template string
console.log(`Ei..${up('cuidado')}`)



































