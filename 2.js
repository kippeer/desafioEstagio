function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let soma;

   
    if (numero === 0 ) {
        console.log("O número informado pertence à sequência de Fibonacci.");
        return;
    }

    // Calcula a sequência de Fibonacci até que a soma dos últimos dois números seja menor ou igual ao número informado
    while (a + b <= numero) {
        soma = a + b;
        a = b;
        b = soma;
        // Verifica se o número informado está na sequência
        if (soma === numero ) {
            console.log("O número informado pertence à sequência de Fibonacci.");
            return;
        }
    }

    // Se o número não estiver na sequência
    console.log("O número informado NÃO pertence à sequência de Fibonacci.");
}

// Teste com um número qualquer
const numeroInformado = 0;
verificaFibonacci(numeroInformado);
