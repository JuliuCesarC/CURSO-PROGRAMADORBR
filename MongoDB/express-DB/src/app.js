import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão feita com sucesso");
});

const app = express();
app.use(express.json());

routes(app)

// app.get("/", async (req, res) => {
//   try {
//     const card = await GpuCard.find();
//     res.send(card);
//   } catch (err) {
//       console.log(err);
//     }
// });

export default app;
