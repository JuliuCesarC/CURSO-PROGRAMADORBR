const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const token = req.header("authorization-token");
    // Quando efetuamos o login, geramos um token no cabeçalho da requisição, dessa forma podemos pegar este token com o 'header'.
    if (!token) return res.status(401).send("Access Denied");

    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
        // Verificamos se o token recebido pelo header da requisição, bate com o segredo selecionado para a criação deste mesmo token. O segredo esta no arquivo '.env'.
        req.user = userVerified;
        // Colocamos o usuario verificado dentro de 'req.user', para que o mesmo possa ser usado no arquivo 'adminRouter'.
        next();
        // Por fim utilizamos o 'next' para que o programa siga em frente no arquivo 'adminRouter'.
    } catch (error) {
        res.status(401).send("Access Denied");
    }
};
