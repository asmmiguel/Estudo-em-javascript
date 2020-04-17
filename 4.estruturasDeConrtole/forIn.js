const notas = [3.3, 4.6, 4.5, 1.1, 0.9]
for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${(pessoa[atributo])}`)
}

//console.log(atributo)  //para confirmar que não existe acesso às variáveis locais do laço for