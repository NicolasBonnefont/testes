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

let senhaNova = Usuarios.filter(usuario => usuario.logado === true).map(() => ({
    senhaNova: Math.floor(Math.random()* 9)
}))



console.log(senhaNova)