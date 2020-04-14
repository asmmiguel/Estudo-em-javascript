const prod1 = {}
prod1.nome = 'celular'
//um objeto é um grupo de chave:valor
prod1.preço = 1111
prod1['desconto']=0.4//inserindo chave:valor

console.log(prod1)

const prod2 = {
    nome: 'camisa',
    preco: 56.34,
    obj: {
        obj1: 'sdds',
        obj2: 2,
    }
}//não esquecer da vírgula
console.log(prod2)

//e3x de json com dados de prod2, é um formatop textual de objeto, coleção de chave valor
'{ "nome": "camisa", "preco": 56.34 }'




