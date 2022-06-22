import logins from "./usuarios.js";

/*
logins.map((login, index)=> {
    logins[index] = {...login, usuario: login.email.slice(0, login.email.indexOf("@"))}

})
//console.log(logins)
*/

const newUser = logins.map(login => ({
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