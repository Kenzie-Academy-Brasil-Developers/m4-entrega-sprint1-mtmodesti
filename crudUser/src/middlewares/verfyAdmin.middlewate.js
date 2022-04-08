import users from "../database"

const verifyAdminMiddleware = (request,response,next) => {
    const userEmail = request.user.email
   
    if (users.length === 0){
        return response.status(401).json({
            message: 'Apenas administradores aqui'
        })
    }
    const findUser = users.find((user => user.email === userEmail))
    if (!findUser.isAdmin){
        return response.status(401).json({
            message: 'Apenas administradores aqui'
        })
    }
    next()
}

export default verifyAdminMiddleware


