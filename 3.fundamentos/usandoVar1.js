{
    {
        {
            var sera = 'Será?'
            console.log(sera)
        }
    }
}
console.log(sera)
//algumas linguagens permitem visibilidade da deviável dentro de um escopo, ou um bloco. no caso de var, isso não acontece, se enxherga fora do bloco, mas parece que tem algo envolvendo funções que complica:

function teste(){
    var local = 123
    console.log(local)
}
teste()
//console.log(local)
//resultado desse comando é não defninido. a variável var, dentro de uma função, só é visível dentro do escopo dessa função.

//exemplo de console
//uma variável criada fora de uma função tem escopo global, 
//var a = 123
//window.a
//123
//var a = 'teste'
//window.a
//'teste

//evitar criar variável que vá para escopo global, porque ela pode ser sobrescrita por alguma outra função indevidamente.

//var tem 2 escopos possíveis oui é global, visível na aplicação inteira; ou com escopo de função
