import { UserDto } from "../dtos/user.dto";
import { User } from "../models/user.model";

export const userAll = async () => {
  return await User.find();
};

export const userById = async (id: string) => {
  return await User.findById(id);
};

export const userSave = async (userDto: UserDto) => {
  const newUser = new User(userDto);
  await newUser.save();
  return newUser;
};

export const userUpdate = async (id: string, userDto: UserDto) => {
  return await User.findByIdAndUpdate(id, userDto, { new: true });
};

export const userDelete = async (id: string) => {
  return await User.findByIdAndDelete(id);
};
