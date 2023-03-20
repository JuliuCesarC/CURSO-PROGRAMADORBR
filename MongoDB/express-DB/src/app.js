import express from "express";
import db from "./config/dbConnect.js";
import GpuCard from "./models/GpuCard.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão feita com sucesso");
});

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const card = await GpuCard.find();
    res.send(card);
  } catch (err) {
      console.log(err);
    }
    
    // GpuCard.find()
    // .then(function (card) {
    //       res.send(card);
    //       console.log(card);
    //   })
    //   .catch(function (err) {
    //       console.log(err);
    //   });
});

export default app;
