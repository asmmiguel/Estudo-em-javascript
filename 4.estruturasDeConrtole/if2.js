function teste1(num) {
    if(num > 7) 
        console.log(num)
    console.log('final')
}

teste1(6)
teste1(8)


function teste1(num) {
    if(num > 7); {  //cuidado com ; não usar com as estruturas de controle
        console.log(num)
    }
        
    //console.log('final')
}

teste1(6)
teste1(8)
