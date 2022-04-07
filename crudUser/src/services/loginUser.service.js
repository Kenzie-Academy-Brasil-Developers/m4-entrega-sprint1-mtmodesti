import jwt from "jsonwebtoken";
import users from "../database";
import * as bycrypt from 'bcryptjs'

const userLoginService = ({ email, password }) => {
  const user = users.find((user) => user.email === email);
 
  const token = jwt.sign(
    {
      email: email,
      isAdmin: user.isAdmin,
    },
    "SECRET_KEY",
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );
    
  return token;
};

export default userLoginService;
