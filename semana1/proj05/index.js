import logins from "./usuarios.js";

/*
logins.map((login, index)=> {
    logins[index] = {...login, usuario: login.email.slice(0, login.email.indexOf("@"))}
})
//console.log(logins)
*/

// Mapeando o array
const newUser = logins.map(login => ({
    //criando uma nova chave com o valor sendo o uma parte de outra chave separada com split
    ...login,
     usuario: login.email.split("@")[0]
}))

console.log(newUser)
//console.log(logins)

/*
let nome = "bvinicius@gmail.com"
console.log(nome.indexOf("@"))
console.log(nome.slice(0, nome.indexOf('@')))
*/