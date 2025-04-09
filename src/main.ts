import express from "express";
import { routes } from "./routes";
import { connecToMongodb } from "./services/database.mongodb.service";

connecToMongodb();

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => {
  console.log(`Servidor ativo na port: ${port} `);
});
