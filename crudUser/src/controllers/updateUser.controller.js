import updateUserService from "../services/updateUser.service";

const userUpdateController = (request, response) => {
  const id = request.params;
  const { name, email, password} = request.body
  const updatedUser = updateUserService({id,name,email,password});
  return response.json(updatedUser);
};

export default userUpdateController;
