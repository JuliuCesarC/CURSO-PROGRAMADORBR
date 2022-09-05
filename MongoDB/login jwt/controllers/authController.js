const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const token = req.header("authorization-token");
    // Quando efetuamos o login, geramos um token no cabeçalho da requisição, dessa forma podemos pegar este token com o 'header'.
    if (!token) return res.status(401).send("Access Denied");

    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = userVerified;
        next();
    } catch (error) {
        res.status(401).send("Access Denied");
    }
};
