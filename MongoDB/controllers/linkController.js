const Link = require("../models/Links");

const redirect = async (req, res, next) => {
    let title = req.params.title;
    try {
        let doc = await Link.findOne({ title: title });
        if(doc){
            res.redirect(doc.url);
        }else{
            next()
        }
    } catch (error) {
        res.send(error);
    }
};

const addLink = async (req, res) => {
    let link = new Link(req.body);
    // Como vamos pegar as informações atravez do corpo da rerquisição, utilizamos o 'req.body'.
    try {
        let doc = await link.save();
        res.redirect('/')
    } catch (error) {
        res.render("index", { error, body: req.body });
        // Enviamos o 'error' junto com o index, para que no arquivo index.ejs o erro seja mostrado de forma mais apresentavel.
    }
};

const allLinks = async (req, res) => {
    try {
        let links = await Link.find({});
        res.render("all02", { links });
    } catch (error) {
        res.send(error);
    }
};

const deleteLink = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        id = req.body.id;
    }
    try {
        // É possivel também utilizar o método abaixo para deletar o documento.
        // await Link.deleteOne({_id:id});
        await Link.findByIdAndDelete(id)
        // res.send(id);
        res.redirect('/')
        // Para o novo método com o 'override' utilizamos o 'redirect'.
    } catch (error) {
        res.status(404).send(error);
        // simulando um erro enviando um 'id' incorreto.
        // É preciso informar o código do erro, para isso utilizamos o 'status' com o código para "não encontrado" que é o 404.
    }
};

module.exports = { redirect, addLink, allLinks, deleteLink };
