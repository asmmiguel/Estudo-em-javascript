var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
//let tem escopo nmenos abrangente, fica restrido ao seu escopo de bloco

let numero2 = 1
{
    let numero3 = 2
    console.log('dentro =', numero2)
}
console.log('fora =', numero2)
//linha d12 procura no menor escopo, senão busca no mais abrangente