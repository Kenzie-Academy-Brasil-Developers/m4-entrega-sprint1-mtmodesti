import listUserService from "../services/listUser.service";
import users from "../database";
import jwt from 'jsonwebtoken'


const listUserController = (request,response) => {
   const token = request.headers.authorization.split(' ')[1]
   
   jwt.verify(token, "SECRET_KEY", (error, decoded) => {
      const { email } = decoded;
      const user = users.find((user) => user.email === email)
      console.log(user)
      return response.json(user)
   })
}

export default listUserController