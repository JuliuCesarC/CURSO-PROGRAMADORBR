const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
    register: async function (req, res) {
        const selectedUser = await User.findOne({ email: req.body.email });
        if (selectedUser)
            return res.status(400).send("ERROR: Email already exists.");
        // Primeiro buscamos se ja existe um usuario com o mesmo email, caso não, então o programa segue normalmente.
        // Quando temos epenas uma linha de comando após o if, podemos omitir as '{}'.

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            // Criamos um novo usuario com os dados vindo da requisição. A senha antes de ser armazenada no banco de dados, ela é encriptada com o Bcrypt.
        });
        try {
            const saveUser = await user.save();
            res.send(saveUser);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    login: async function (req, res) {
        const selectedUser = await User.findOne({ email: req.body.email });
        if (!selectedUser)
            return res.status(400).send("Email or Password incorrect.");
        // Caso não seja encontrado nenhum usuario com o email enviado na requisição, então retorna um erro 400 e não executa os comando abaixo.

        const passwordAndUserMatch = bcrypt.compareSync(
            req.body.password,
            selectedUser.password
        ); // Utilizamos o Bcrypt para verificar se a senha enviada é igual a senha salva no banco de dados.

        if (!passwordAndUserMatch)
            return res.status(400).send("Email or Password incorrect.");
        // Utilizamos o mesmo erro de email não encontrado para senha incorreta.

        // Para o token, utilizamos apenas o id do usuario, mas poderiamos enviar o email também. Após enviar os dados necessarios, passamos o segredo, que esta no arquivo '.env'.
        const token = jwt.sign(
            { _id: selectedUser._id },
            process.env.TOKEN_SECRET
        );

        res.header("authorization-token", token);
        // O token gerado é enviado para o cabeçalho da requisição.
        res.send("User Logged");
    },
};
module.exports = userController;
