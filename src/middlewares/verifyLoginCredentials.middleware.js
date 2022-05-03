import users from "../database";
import * as bcrypt from "bcryptjs";

const verifyLoginCredentialsMiddleware = (req, res, next) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ message: "Wrong Credentials" });
  }

  const passwordMatch = bcrypt.compareSync(password, user.hashedPassword);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Wrong Credentials" });
  }
    next();
};

export default verifyLoginCredentialsMiddleware;
