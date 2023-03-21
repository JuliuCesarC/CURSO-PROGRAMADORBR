import GpuCard from "../models/GpuCard.js";

class GpuCardController {
  static getCards = (req, res) => {
    GpuCard.find()
      .then((card) => {
        res.send(card);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  static getById = (req, res) => {
    let id = req.params.id;

    GpuCard.findById(id)
      .then((card) => {
        res.status(200).send(card);
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
        console.log(err);
      });
  };
  static postCard = (req, res) => {
    let gpuCard = new GpuCard(req.body);

    gpuCard
      .save()
      .then((card) => {
        res.status(201).send(card);
      })
      .catch((err) => {
        res.status(500).send({ message: `${err.message}` });
        console.log(err);
      });
  };
  static updateCard = (req, res) => {
    let id = req.params.id;

    GpuCard.findByIdAndUpdate(id, { $set: req.body })
      .then(() => {
        res.status(200).send({ message: "Card atualizado com sucesso" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
        console.log(err);
      });
  };
  static deleteCard = (req, res)=>{
    let id = req.params.id

    GpuCard.findByIdAndDelete(id)
    .then(()=>{
      res.status(200).send({message: "Card removido com sucesso"})
    })
    .catch((err)=>{
      res.status(500).send({message: err.message})
    })
  }
}

export default GpuCardController;
