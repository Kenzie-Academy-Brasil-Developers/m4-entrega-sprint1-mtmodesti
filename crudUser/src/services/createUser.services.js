import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bycrpt from "bcryptjs";

const createUserService = async ({name, email, password, isAdmin = false}) => {
  const hashedPassword = await bycrpt.hash(password, 8);

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
    password: hashedPassword,
    isAdmin,
    id: uuidv4(),
    createdOn: date,
    updatedOn: date
  };
  users.push(newUser)
  return newUser
};

export default createUserService
