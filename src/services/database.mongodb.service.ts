import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGO_URI as string;

export const connecToMongodb = () => {
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("Banco mongodb conectado!");
    })
    .catch((err) =>
      console.error("Error ao tentar estabelecer conexão com o mongodb.", err)
    );
};
