import users from "../database";
import { userIndex } from "../middlewares/verifyIfUserExists.middleware";

const updateUserService = (id, name, email) => {
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

  const currentUser = users.find((user) => user.id === id);

  const newUser = {
    id,
    createdOn: currentUser.createdOn,
    updatedOn: date,
    name: name || currentUser.name,
    email: email || currentUser.email,
    isAdm: currentUser.isAdm,
  };
  users[userIndex] = newUser;
  return newUser;

  return users;
};

export default updateUserService;
