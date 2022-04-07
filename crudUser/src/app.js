import express from "express";
import router from "./routers/user.routes";

const app = express();
app.use(express.json());

const port = 3000;

app.use("/users", router); 

app.get("/", (req, res) => {
  res.send("Página inicial");
});

app.listen(port, () => {
  console.log(`
    App rodando na porta ${port}
    `);
});
