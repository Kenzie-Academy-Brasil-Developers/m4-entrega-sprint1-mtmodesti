import listUsersService from "../services/listUsers.service";


const listUsersController = (request,response) => {
const users = listUsersService()
return response.json(users).status(201)
}

export default listUsersController