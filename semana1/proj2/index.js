import Usuarios from "./arrays.js";

const usersLogados = []
const usersDeslogados = []

Usuarios.map(usuario => {
    if (usuario.senha.length > 8 && usuario.idade > 27) {
        usersLogados.push({
            ...usuario,
            logado: true
        })

        console.log(usuario.nome + ": logado")

    } else {
        usersDeslogados.push({
            ...usuario,
            logado: false
        })

        console.log(usuario.nome + ": Deslogado")
    }
})

const reunidos = [... usersLogados, ...usersDeslogados]


console.log(reunidos)

//console.log(usersLogados)
//console.log(usersDeslogados)