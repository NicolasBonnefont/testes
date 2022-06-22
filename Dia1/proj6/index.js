/* CRIAR UMA FUNCAO QUE RECEBE UMA STRING NO FORMATADO DE DATA,
ESSA FUNCAO VAI TER COMO RESPONSABILIDADE CONVERTER ESSA STRING EM UM TIPO DATE
E IMPRIMIR NO CONSOLE SOMENTE O ANO   20/06/2022 */


function converterData(data) {

    const dataCortada = String(data).split("/").reverse().join("-")

    const dataConvertida = new Date(dataCortada).getFullYear()
    
    return dataConvertida
    
}

console.log(converterData("20/06/2022"))


