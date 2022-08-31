const express = require("express");
const linkController = require("../controllers/linkController");
const methodOverride = require('method-override')
const router = express.Router();

router.use(methodOverride('_method'))

router.get("/", linkController.allLinks);

router.get("/:title", linkController.redirect);

router.get("/add", (req, res) => {
    res.render("index", { error: false, body: {} });
});

router.post(
    "/",
    express.urlencoded({ extended: true }),
    linkController.addLink
    // O 'express.urlencoded' permite pegar as informações do body da requisição, e utilizaremos essas funções na função 'linkController.addLink'.
);

router.delete("/:id", linkController.deleteLink);
router.delete("/", express.json(), linkController.deleteLink);

module.exports = router;
