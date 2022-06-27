const nome = "Breno Novais Mota"

// Separando a frase em um array de palavras
const separado = nome.split(" ")
console.log(separado)

// Mapeando o array separado e transformando cada elemento em minusculo
separado.map((nome, index) => separado[index] = nome.toLocaleLowerCase())
console.log(separado)

// Juntando o array em uma string separando os elementos por " "
const junto = separado.join(" ")
console.log(junto)

/* quebre em 3 partes
    Lowercase nos 3
    Juntar todos
*/