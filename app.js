const { stdin } = require('process');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('-------------------------------------------')
console.log('           JAVASCRIPT CALCULATOR           ')
console.log('-------------------------------------------')
console.log('---------  BEM-VINDO A APLICAÇÃO ----------')
console.log('-------------------------------------------')
console.log(' ')
console.log('Adição....................................+')
console.log('Multiplicação.............................x')
console.log('Subtração.................................-')
console.log('Divisão.................................../')
console.log('Potenciação...............................^')
console.log('Porcentagem...............................%')
console.log('-------------------------------------------')
console.log(' ')

/*replce() - permite localizar um caracter e substituir por outro*/
entradaDados.question('Primeiro, informe a operação desejada [ + , x , - , / , ^ , % ]: ', function (operacaoEscolha) {
    let escolha = operacaoEscolha.toLowerCase();

    entradaDados.question('Por favor, informe o primeiro valor: ', function (primeiroValor) {
        let valor1 = primeiroValor.replace(',', '.');

        entradaDados.question('Agora, informe o seguno valor: ', function (segundoValor) {
            let valor2 = segundoValor.replace(',', '.');

            if (valor1 == '' || valor2 == '') {

                console.log('-------------------------------------------')
                console.log('ERRO: Preencha TODOS os campos CORRETAMENTE')
                console.log('-------------------------------------------')

            } else if (isNaN(valor1) || isNaN(valor2)) {

                console.log('-------------------------------------------')
                console.log('ERRO: Digite SOMENTE números')
                console.log('-------------------------------------------')

            } else {

                valor1 = parseFloat(valor1)
                valor2 = parseFloat(valor2)


                console.log('Primeiro valor: ' + valor1)
                console.log('Segundo valor: ' + valor2)

                if (escolha == "+") {

                    let resultado = valor1 + valor2

                    console.log('Resultado: ' + valor1 + " + " + valor2 + " = " + resultado.toFixed(2).replace('.', ','))

                } else if (escolha == "-") {

                    resultado = valor1 - valor2

                    console.log('Resultado: ' + valor1 + " - " + valor2 + " = " + resultado.toFixed(2).replace('.', ','))

                } else if (escolha == "x") {

                    resultado = valor1 * valor2

                    console.log('Resultado: ' + valor1 + " x " + valor2 + " = " + resultado.toFixed(2).replace('.', ','))

                } else if (escolha == "/") {

                    if (valor2 == 0) {

                        console.log('-------------------------------------------')
                        console.log('ERRO: NÃO é possível dividir um número por 0!')
                        console.log('-------------------------------------------')

                    } else {

                        resultado = valor1 / valor2

                        console.log('Resultado: ' + valor1 + " / " + valor2 + " = " + resultado.toFixed(2).replace('.', ','))
                    }

                } else if (escolha == "^") {

                    resultado = valor1 ** valor2

                    console.log('Resultado: ' + valor1 + " ^ " + valor2 + " = " + resultado.toFixed(2).replace('.', ','))

                } else if (escolha == "%") {

                    resultado = (valor1 / 100) * valor2

                    //To fixed - ajuda a epecificar a quantidade de decimais após a virgula

                    console.log('Resultado: ' + valor1 + " % " + valor2 + " = " + resultado.toFixed(2).replace('.', ','))

                } else {
                    console.log('-------------------------------------------')
                    console.log('ERRO: Informe a OPERAÇÃO de forma CORRETA')
                    console.log('-------------------------------------------')
                }
            }
            entradaDados.close();

        })
    })
})