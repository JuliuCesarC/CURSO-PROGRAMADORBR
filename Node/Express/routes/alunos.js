const express = require('express')
const router = express.Router()
// O 'router' é um objeto do express que facilita muito na hora de separar as rotas. Com o router podemos criar todas as rotas necessarias aqui dentro e depois exportar elas. 

let alunos = [
    { id: 0, nome: "Jão" },
    { id: 1, nome: "NataN" },
    { id: 2, nome: "Jenfiner" },
    { id: 3, nome: "Lusca" },
];

router.get("/aluno", (req, res, next) => {
    console.log(req.body);
    let aluno = alunos[req.body.id];
    if (aluno) {
        res.json(aluno);
    } else {
        next();
    }
});
router.get("/aluno/all", (req, res)=>{
    res.json(JSON.stringify(alunos))
})
router.get("/aluno/:id", (req, res)=>{
    console.log(req.params.id)
    let aluno = alunos[req.params.id]
    res.json(aluno)
})
module.exports = router