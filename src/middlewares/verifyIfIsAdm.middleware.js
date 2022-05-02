import users from "../database";

const verifyIfIsAdmMiddleware = (req, res, next) => {
  const id = req.user.id

  const currentUser = users.find((user) => user.id === id);

  if (!currentUser.isAdm) {
    return res.status(401).json({ message: "Missing admin permissions" });
  }
  next();
};

export default verifyIfIsAdmMiddleware;