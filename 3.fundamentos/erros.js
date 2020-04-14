function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw true
    //throw 10
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeUpper(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }finally {
        console.log('final')
    }
    
}
const obj = {nome: 'Roberto'}
imprimirNomeUpper(obj)


//não está rodando corretamente, preciso revisar, deveria imprimir o nome em caixa alta também
