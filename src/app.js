import express from "express";
import userRoutes from "./router/users.routes"

const app = express();
app.use(express.json());

const port = 3000;

app.use("/", userRoutes);

app.get('/', (req,res) => {
  res.send('oi')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
