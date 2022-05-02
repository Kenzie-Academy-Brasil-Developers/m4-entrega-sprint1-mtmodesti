import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async ({ name, email, password, isAdm }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const today = new Date();

  const date =
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear() +
    " - " +
    today.getHours() +
    ":" +
    today.getMinutes();

  const newUser = {
    name,
    email,
    hashedPassword,
    isAdm,
    createdOn: date,
    updatedOn: date,
    id: uuidv4(),
  };

  users.push(newUser);

  return {
    id: newUser.id,
    createdOn: date,
    updatedOn: date,
    name,
    email,
    isAdm,
  };
};

export default createUserService;
