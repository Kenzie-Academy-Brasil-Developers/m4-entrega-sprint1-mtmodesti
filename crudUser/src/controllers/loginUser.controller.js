import userLoginService from "../services/loginUser.service";

const userLoginController = (request,response) => {
    const {email,password} = request.body
    const emailLogin = userLoginService({email,password})
    return response.json(emailLogin)
}

export default userLoginController