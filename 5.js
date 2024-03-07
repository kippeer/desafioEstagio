function inverteString(string) {
    // Converte a string para um array de caracteres
    var caracteres = string.split('');
    // Obtém o tamanho da string
    var tamanho = caracteres.length;
    // Itera sobre metade da string
    for (var i = 0; i < Math.floor(tamanho / 2); i++) {
        // Troca os caracteres de posição
        var temp = caracteres[i];
        caracteres[i] = caracteres[tamanho - 1 - i];
        caracteres[tamanho - 1 - i] = temp;
    }
    // Junta os caracteres em uma string novamente
    var stringInvertida = caracteres.join('');
    return stringInvertida;
}

// String de exemplo
var stringOriginal = "FABIO ARAGAO TESSARO";
// Inverte a string
var stringInvertida = inverteString(stringOriginal);
// Exibe a string invertida
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
