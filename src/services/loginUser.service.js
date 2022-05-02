import jwt from "jsonwebtoken";
import users from "../database";

const userLoginService = (email) => {
  const user = users.find((user) => user.email === email);

  const token = jwt.sign(
    {
      email: email,
      isAdm: user.isAdm,
    },
    "8422dbd9f4d4bbc30b6b4d57605da553",
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return { token: token };
};

export default userLoginService;
