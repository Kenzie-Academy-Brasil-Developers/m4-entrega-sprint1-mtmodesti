import users from "../database";
import { indexOfTheUser } from "../middlewares/verifyIfUserExists.middleware";

const deleteUserService = () => {
  
  users.splice(indexOfTheUser, 1);

  return "User has been deleted";
};

export default deleteUserService;
