import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Api ativa...tsc-watch");
});

app.listen(port, () => {
  console.log(`Servidor ativo na port: ${port} `);
});
