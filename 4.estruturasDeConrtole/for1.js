let contador =1
while (contador <= 10){
    console.log(`contador = ${contador}`)
    contador ++
}

for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
} 

const notas = [3.3, 4.6, 4.5, 1.1, 0.9]
for(let i=0; i < notas.length; i++){  //usar o let para restringir o acesso à variável para fora do bloco da função
    console.log(`nota = ${notas[i]}`)
}