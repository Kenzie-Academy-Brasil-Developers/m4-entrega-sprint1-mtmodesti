import showUserService from "../services/showUser.service";

const showUserController = (req, res) => {
  const { email } = req.user;

  const user = showUserService(email);

  return res.status(200).json(user);
};

export default showUserController;
