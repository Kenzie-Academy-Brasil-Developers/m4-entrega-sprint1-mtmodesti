import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing Authorization Headers" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "8422dbd9f4d4bbc30b6b4d57605da553", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token." });
    }

    const { sub, email } = decoded;

    req.user = {
      id: sub,
      email: email,
    };

    next();
  });
};

export default verifyAuthTokenMiddleware;
