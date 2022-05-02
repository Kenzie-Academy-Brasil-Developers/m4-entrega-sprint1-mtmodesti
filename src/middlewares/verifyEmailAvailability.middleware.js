import users from "../database";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const { email } = request.body;

  const userArealdyExists = users.find((user) => user.email === email);

  if (userArealdyExists) {
    return response.status(400).json({ message: "E-mail already registered" });
  }
  next();
};

export default verifyEmailAvailabilityMiddleware;
