import Usuarios from "./arrays.js";

/*
const usuarioSenhaNova = []

Usuarios.filter(usuario => usuario.logado === true &&
    usuarioSenhaNova.push({
            ...usuario,
            senhaNova: Math.floor(Math.random()* 9 )
        }
    )
)
*/

// filtrando chave logado com valor true, mapeando o resultado e criando uma senha nova p/ cada elemento
let senhaNova = Usuarios.filter(usuario => usuario.logado === true).map(() => ({
    // Criando senha aleatória
    senhaNova: Math.floor(Math.random()* 9)
}))

console.log(senhaNova)