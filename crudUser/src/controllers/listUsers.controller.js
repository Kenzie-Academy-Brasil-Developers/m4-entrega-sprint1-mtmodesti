import listUsersService from "../services/listUsers.service";


const listUserController = (request,response) => {
const users = listUsersService()
return response.json(users).status(201)
}

export default listUserController