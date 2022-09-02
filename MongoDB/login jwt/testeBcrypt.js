const bcrypt = require("bcryptjs");

const password = "Minha Senha";

const salt = bcrypt.genSaltSync(14);
// Por padrão o 'bcrypt' utiliza 10 rounds, mas podemos alterar esta propriedade utilizando o 'genSaltSync'.

const cryptPassword = bcrypt.hashSync(password, salt);
// O 'hash' é responsavel por encriptar a senha, como parametro passamos o 'password', e opcionalmente o 'salt' caso tenhamos alterado ele. No exemplo atual utilizando o 'hashSync' pois ele gera uma função assincrona, dispensando o uso do await async.

const dbSavePassword =
    "$2a$14$5cfpSa5e.5lDd1jsQ2boqusZVXjM5iQhlv9jbLJYcJ.T/tdsGDhaS";
const res = bcrypt.compareSync(password, dbSavePassword)
// O 'compareSync' é responsavel por comparar a senha original enviada pelo usuario, com a senha encriptada, que no nosso caso esta salva no banco de dados.

console.log(cryptPassword);

console.log(res);
