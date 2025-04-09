import { Request, Response } from "express";
import {
  userAll,
  userById,
  userDelete,
  userSave,
  userUpdate,
} from "../services/user.service";
import { UserDto } from "../dtos/user.dto";

export class UserController {
  static async getAll(req: Request, res: Response) {
    try {
      const result = await userAll();
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const result = await userById(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }

  static async saveUser(req: Request, res: Response) {
    const userDto: UserDto = req.body;

    try {
      const result = await userSave(userDto);
      res.send(result);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }

  static saveUsers(req: Request, res: Response) {
    let newUsers: UserDto[] = req.body;

    try {
      newUsers.forEach(async (user) => {
        await userSave(user);
      });

      res.status(200).send("Usuários cadastrados com sucesso!");
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }

  static async update(req: Request, res: Response) {
    const id = req.params.id;
    const user: UserDto = req.body;

    try {
      const result = await userUpdate(id, user);
      res.send(result);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const result = await userDelete(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
}
