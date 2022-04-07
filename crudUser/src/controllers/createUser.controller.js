import createUserService from "../services/createUser.services";

const createUserController = async (request,response) => {
    const {email, name, password, isAdmin} = request.body
    const user = await createUserService({name, email, password, isAdmin})
    return response.status(201).json(user)
} 

export default createUserController 