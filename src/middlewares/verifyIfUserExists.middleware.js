import users from "../database";

const verifyIfUserExistsMiddleware = (req, res, next) => {
  const { id } = req.params;

    const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json("user not found");
  }

  next();
};

export default verifyIfUserExistsMiddleware;
