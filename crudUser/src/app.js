import express from "express";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Página inicial");
});

app.listen(port, () => {
  console.log(`
    App rodando na porta ${port}
    `);
});
