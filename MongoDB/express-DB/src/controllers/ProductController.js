import Product from "../models/Product.js";

class ProductController {
  static getProducts = (req, res) => {
    Product.find()
      .then((info) => {
        res.send(info);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  static getProductById = (req, res) => {
    let id = req.params.id;

    Product.findById(id)
      .then((info) => {
        res.status(200).send(info);
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
        console.log(err);
      });
  };
  static postProduct = (req, res) => {
    let product = new Product(req.body);

    product
      .save()
      .then((info) => {
        res.status(201).send(info);
      })
      .catch((err) => {
        res.status(500).send({ message: `${err.message}` });
        console.log(err);
      });
  };
  static updateProduct = (req, res) => {
    let id = req.params.id;

    Product.findByIdAndUpdate(id, { $set: req.body })
      .then(() => {
        res.status(200).send({ message: "Card atualizado com sucesso" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
        console.log(err);
      });
  };
  static deleteProduct = (req, res)=>{
    let id = req.params.id

    Product.findByIdAndDelete(id)
    .then(()=>{
      res.status(200).send({message: "Card removido com sucesso"})
    })
    .catch((err)=>{
      res.status(500).send({message: err.message})
    })
  }
}

export default ProductController;
