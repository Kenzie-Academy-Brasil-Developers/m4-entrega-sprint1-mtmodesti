import jwt from "jsonwebtoken";
import users from "../database";

const userLoginService = (email) => {
  const user = users.find((user) => user.email === email);

  const token = jwt.sign(
    {
      email: email,
      isAdm: user.isAdm,
    },
    "SECRET_KEY",
    {
      expiresIn: "24h",
      subject: user.id,

    }
  );

  return { token: token };
};

export default userLoginService;
