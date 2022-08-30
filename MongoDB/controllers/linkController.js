const Link = require("../models/Links");

const redirect = async (req, res) => {
    let title = req.params.title;
    try {
        let doc = await Link.findOne({ title: title });
        res.redirect(doc.url);
    } catch (error) {
        console.log(error);
    }
};

const addLink = async (req, res)=>{
    let link = new Link(req.body)
    // Como vamos pegar as informações atravez do corpo da rerquisição, utilizamos o 'req.body'.
    try{
        let doc = await link.save()
        res.send("Link adicionado com sucesso!")
    }catch(error){
        res.send(error)
    }
}

module.exports = { redirect, addLink };
