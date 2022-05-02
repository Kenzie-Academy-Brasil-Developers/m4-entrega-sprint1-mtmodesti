import userLoginService from "../services/loginUser.service";

const userLoginController = (req, res) => {
  const { email} = req.body;

  const userLogin = userLoginService(email);

  return res.status(200).json(userLogin);
};

export default userLoginController;
