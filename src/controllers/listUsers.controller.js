import listUsersService from "../services/listUsers.service";

const listUsersController = (req, res) => {
  const usersList = listUsersService();

  return res.status(200).json(usersList);
};

export default listUsersController;
