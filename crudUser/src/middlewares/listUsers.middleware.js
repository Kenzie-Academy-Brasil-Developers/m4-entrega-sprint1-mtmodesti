import jwt from 'jsonwebtoken'
import req from 'express/lib/request';


const listUsersMiddleware = (request, response, next) => {
    let token = request.headers.authorization;

    if (!token.split(' ')[1]) {
      return response.status(401).json({ message: "Missing Token" });
    }

    const isAdmin = request.headers.isAdmin
    if (!isAdmin){
        return response.status(401).json({message: 'Apensar administradores podem ver!'})
    }
  
    token = token.split(" ")[1];
  
    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
      if (error) {
        return response.status(401).json({ message: "Invalid Token." });
      }
  
      const { sub, email } = decoded;
  
      req.user = {
        id: sub,
        email: email,
      };
  
      next();
    });
};

export default listUsersMiddleware
