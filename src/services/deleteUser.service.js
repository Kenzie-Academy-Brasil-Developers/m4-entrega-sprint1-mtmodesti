import users from "../database";
import { userIndex } from "../middlewares/verifyIfUserExists.middleware";

const deleteUserService = (id) => {
  users.splice(userIndex, 1);

  return "User deleted with success";
};

export default deleteUserService;
