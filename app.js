const { stdin } = require('process');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('-------------------------------------------')
console.log('           JAVASCRIPT CALCULATOR           ')
console.log('-------------------------------------------')
console.log('-------  WELCOME TO THE APPLICATION -------')
console.log('Adição....................................+')
console.log('Multiplicação.............................x')
console.log('Subtração.................................-')
console.log('Divisão.................................../')
console.log('-------------------------------------------')

entradaDados.question('Primeiro, informe a operação desejada [ + , x , - , / ]: ', function(operacaoEscolha){
    let escolha = operacaoEscolha
    entradaDados.question('Por favor, informe o primeiro valor: ', function (primeiroValor){
        let valor1 = primeiroValor
            entradaDados.question('Agora, informe o seguno valor: ', function(segundoValor){
                let valor2 = segundoValor

                valor1 = parseFloat(primeiroValor)
                valor2 = parseFloat(segundoValor)               
           
    if( valor1 == '' || valor2 == '' || escolha == ''){

        console.log('-------------------------------------------')
        console.log('ERRO: Preencha TODOS os campos CORRETAMENTE')
        console.log('-------------------------------------------')
        
    } else {

        console.log('Primeiro valor: ' + valor1)
        console.log('Segundo valor: ' + valor2)

        if(escolha == "+"){

            let resultado = valor1 + valor2

            console.log('Resultado: ' + valor1 + " + "+ valor2 + " = "+ resultado)   

        } else if(escolha == "-"){

            resultado = valor1 - valor2

            console.log('Resultado: ' + valor1 + " - "+ valor2 + " = "+ resultado)       

        } else if(escolha == "x"){

            resultado = valor1 * valor2

            console.log('Resultado: ' + valor1 + " * "+ valor2 + " = "+ resultado)     

        }else if (escolha == "/"){

            resultado = valor1 / valor2

            console.log('Resultado: ' + valor1 + " % "+ valor2 + " = "+ resultado)  

        }else{
            console.log('-------------------------------------------')
            console.log('ERRO: Preencha TODOS os campos CORRETAMENTE')
            console.log('-------------------------------------------')
        }
    }             
        entradaDados.close();
                
        })
    })
})