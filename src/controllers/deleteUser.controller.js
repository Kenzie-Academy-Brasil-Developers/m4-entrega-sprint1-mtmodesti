import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
  const { id } = req.params;

  const deletedUser = deleteUserService(id);

  return res.status(200).json(deletedUser);
};

export default deleteUserController;
