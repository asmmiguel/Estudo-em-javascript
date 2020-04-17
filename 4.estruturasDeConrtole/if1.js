function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(5)

function seForVerdade(valor) {
    if(valor) {
        console.log('verdade' + valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade('?')
seForVerdade([])
seForVerdade([1, 2])
seForVerdade({})