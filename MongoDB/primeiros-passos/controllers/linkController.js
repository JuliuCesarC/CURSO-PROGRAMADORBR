const Link = require("../models/Links");

const redirect = async (req, res, next) => {
    let title = req.params.title;
    try {
        let doc = await Link.findOneAndUpdate(
            { title: title },
            { $inc: { click: 1 } }
            
        );
        if (doc) {
            // Acima temos uma função que procura o documento no banco de dados que esta de acordo com a requisição, e acrecentamos um click. Abaixo pegamos o 'url' desse documento e redirecionamos o usuario para o site em questão.
            res.redirect(`https://${doc.url}`);
        } else {
            next();
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
        res.redirect("/");
    } catch (error) {
        res.render("add", { error, body: req.body });
        // Enviamos o 'error' junto com o index, para que no arquivo index.ejs o erro seja mostrado de forma mais apresentavel.
    }
};

const allLinks = async (req, res) => {
    try {
        let docs = await Link.find({});
        res.render("all02", { links: docs });
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
        await Link.findByIdAndDelete(id);
        // res.send(id);
        res.redirect("/");
        // Para o novo método com o 'override' utilizamos o 'redirect'.
    } catch (error) {
        res.status(404).send(error);
        // simulando um erro enviando um 'id' incorreto.
        // É preciso informar o código do erro, para isso utilizamos o 'status' com o código para "não encontrado" que é o 404.
    }
};

const loadLink = async (req, res) => {
    let id = req.params.id;
    try {
        let doc = await Link.findById(id);
        res.render("edit", { error: false, body: doc });
        // Buscamos o documento no banco de dados utilizando o id enviado pela requisição, então renderizamos a pagina 'edit' e enviamos para ela atravez do 'body' o documento encontrado. 
    } catch (error) {
        res.status(404).send(error);
    }
};

const editLink = async (req, res) => {
    let link = {};
    link.title = req.body.title;
    link.description = req.body.description;
    link.url = req.body.url;

    let id = req.params.id;
    if (!id) {
        id = req.body.id;
    }
    try {
        // let doc = await Link.findByIdAndUpdate(id, link);
        // O método abaixo é mais atual para atualizar um documento.
        let doc = await Link.updateOne({ _id: id }, link);
        res.redirect("/");
    } catch (error) {
        res.render("edit", { error, body: req.body });
        // Enviamos o 'error' junto com o index, para que no arquivo index.ejs o erro seja mostrado de forma mais apresentavel.
    }
};

module.exports = {
    redirect,
    addLink,
    allLinks,
    deleteLink,
    loadLink,
    editLink,
};
