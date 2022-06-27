import Usuarios from "./src/arrays.js";

let usersBirthday = []


//mapeando o array usuarios
Usuarios.map(usuario => {
    //para cada usuario adicionando uma chave e alterando o valor de outra utiluzando o: ...'spread'
    usersBirthday.push({
        ...usuario,
        descricao: "feio",
        idade: usuario.idade
    }) 
    
})

console.log(usersBirthday)