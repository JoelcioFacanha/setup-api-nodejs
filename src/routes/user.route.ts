import express from "express";
import { UserController } from "../controllers/user.controller";

export const userRouter = express.Router();

userRouter.get("/users", UserController.getAll);
userRouter.get("/users/:id", UserController.getById);
userRouter.post("/users", UserController.saveUser);
userRouter.post("/registers", UserController.saveUsers);
userRouter.put("/users/:id", UserController.update);
userRouter.delete("/users/:id", UserController.delete);
