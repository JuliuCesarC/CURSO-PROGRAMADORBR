const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");

// Criamos uma rota separada apenas para Admins, dessa forma as funcionalidades de um admin não ficaram no mesmo arquivo dos usuarios comuns.

router.get("/", auth, (req, res) => {
    // Como passamos o 'auth' como middleware, o conteudo abaixo somente sera exibido caso todas as autenticações feitas detro do arquivo 'authController' estejam corretas.

    if (req.user.admin) {
        res.send("Sigiloso: acesso apenas para Admin.");
    } else {
        res.status(401).send("Not Admin: Access Denied");
    }
});

module.exports = router;
