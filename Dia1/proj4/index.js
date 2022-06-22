const nome = "Breno Novais Mota"

const separado = nome.split(" ")
console.log(separado)

separado.map((nome, index) => separado[index] = nome.toLocaleLowerCase())

console.log(separado)

const junto = separado.join(" ")

console.log(junto)

/* quebre em 3 partes
    Lowercase nos 3
    Juntar todos
*/