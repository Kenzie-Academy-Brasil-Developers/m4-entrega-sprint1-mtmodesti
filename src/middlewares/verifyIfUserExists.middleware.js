import users from "../database";

const verifyIfUserExistsMiddleware = (req, res, next) => {
  const { id } = req.params;

    const indexOfTheUser = users.findIndex((user) => user.id === id);

  if (indexOfTheUser === -1) {
    return res.status(404).json("user not found");
  }

  next();
};

export default verifyIfUserExistsMiddleware;
