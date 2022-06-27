import Usuarios from "./arrays.js";

const usersLogados = []
const usersDeslogados = []

Usuarios.map(usuario => {
    /* // if tamanho da senha for maior que 8 e a idade do usuario maior que 27
    adiciona a chave logado com valor true */
    if (usuario.senha.length > 8 && usuario.idade > 27) {
        usersLogados.push({
            ...usuario,
            logado: true
        })

        console.log(usuario.nome + ": logado")
        /* else adiciona a chave logado com valor false     */ 
    } else {
        usersDeslogados.push({
            ...usuario,
            logado: false
        })

        console.log(usuario.nome + ": Deslogado")
    }
})

 // criando um novo array adicionando o conteudo dos outros 2
const reunidos = [... usersLogados, ...usersDeslogados]


console.log(reunidos)

//console.log(usersLogados)
//console.log(usersDeslogados)