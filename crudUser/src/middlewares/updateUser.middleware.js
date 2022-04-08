import jwt from 'jsonwebtoken'

const updateUserMiddleware = (request,response,next) => {
    let token = request.headers.authorization;

    if (!token.split(' ')[1]) {
      return response.status(401).json({ message: "Missing Token" });
    }
  
    token = token.split(" ")[1];
  
    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
      if (error) {
        return response.status(401).json({ message: "Invalid Token." });
      }
  
      const { sub, email } = decoded;
      
      request.user = {
        id: sub,
        email: email,
      };
  
    });  

    
    next();
  
}

export default updateUserMiddleware