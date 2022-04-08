import users from "../database";
import * as bcrypt from "bcryptjs";

const verifyLoginMiddleware = (request, response, next) => {
  const { email, password } = request.body;

  const user = users.find((user) => user.email === email);

  if (!user) {
    return response.status(401).json({
      message: "Acesso negado. Insira credenciais de login corretamente",
    });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if(!passwordMatch){
      return response.status(401).json({
          message: "Acesso negado. Insira credenciais de login corretamente"
      })
  }

  next()
};


export default verifyLoginMiddleware