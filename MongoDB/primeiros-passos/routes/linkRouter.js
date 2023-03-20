const express = require("express");
const linkController = require("../controllers/linkController");
const methodOverride = require("method-override");
const router = express.Router();

router.use(methodOverride("_method"));

router.get("/", linkController.allLinks);
router.get("/:title", linkController.redirect);
router.get("/add", (req, res) => {res.render("add", { error: false, body: {} });
});
router.get('/edit/:id', linkController.loadLink)

router.post("/", express.urlencoded({ extended: true }),linkController.addLink
    // O 'express.urlencoded' permite pegar as informações do body da requisição, e utilizaremos essas funções na função 'linkController.addLink'.
);
router.post('/edit/:id', express.urlencoded({ extended: true }), linkController.editLink)

router.delete("/:id", linkController.deleteLink);
router.delete("/", express.urlencoded({ extended: true }), linkController.deleteLink);

module.exports = router;
