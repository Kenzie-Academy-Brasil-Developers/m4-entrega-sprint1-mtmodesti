import users from "../database";
import { indexOfTheUser } from "../middlewares/verifyIfUserExists.middleware";

const updateUserService = (id, name, email) => {

  const currentUser = users.find((user) => user.id === id);
  
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
    id,
    createdOn: currentUser.createdOn,
    updatedOn: date,
    name: name || currentUser.name,
    email: email || currentUser.email,
    isAdm: currentUser.isAdm,
  };
  users[indexOfTheUser] = newUser;
  return newUser;

};

export default updateUserService;
