import Usuarios from "./src/arrays.js";


let usersBirthday = []

Usuarios.map(usuario => {

    usersBirthday.push({
        ...usuario,
        descricao: "feio",
        idade: usuario.idade
    }) 
    
})

console.log(usersBirthday)