/* CRIAR UMA FUNCAO QUE RECEBE UMA STRING NO FORMATADO DE DATA,
ESSA FUNCAO VAI TER COMO RESPONSABILIDADE CONVERTER ESSA STRING EM UM TIPO DATE
E IMPRIMIR NO CONSOLE SOMENTE O ANO   20/06/2022 */


function converterData(data) {
    // Especificando que o elemento data é uma string, separando, invertendo as posiçoes e juntando novamente
    const dataCortada = String(data).split("/").reverse().join("-")
    //transformando a string contendo a data em uma data e e escolhendo apenas o ano
    const dataConvertida = new Date(dataCortada).getFullYear()
    // Retornando a data convertida
    return dataConvertida
    
}

console.log(converterData("20/06/2022"))


