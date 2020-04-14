const saudacao = 'Opa' //contexto léxico, contexto no local físico onde a variável foi definida no código

function exec(){
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)