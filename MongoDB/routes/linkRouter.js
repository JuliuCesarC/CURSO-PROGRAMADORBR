const express = require("express");
const linkController = require("../controllers/linkController");
const router = express.Router();

router.get("/:title", linkController.redirect);

router.get("/", (req, res) => {
    res.render('index');
});

router.post(
    "/",
    express.urlencoded({ extended: true }),
    linkController.addLink
);
// O 'express.urlencoded' permite pegar as informações do body da requisição, e utilizaremos essas funções na função 'linkController.addLink'.

module.exports = router;
