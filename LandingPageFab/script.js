function pegaValorInput(ValorBotao){
    let inputCount = document.getElementById('inputCount')

    if(ValorBotao == 'mais'){
        inputCount.value = parseInt(inputCount.value) + 1


    }
    if(ValorBotao == 'menos' && inputCount.value > 0){
        inputCount.value = parseInt(inputCount.value) - 1
        

    }



}