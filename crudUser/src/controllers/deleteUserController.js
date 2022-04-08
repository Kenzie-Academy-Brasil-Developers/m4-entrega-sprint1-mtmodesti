import deleteUserService from "../services/deleteUser.service";
import users from "../database";

const deleteUserController = (request, response) => {
  const { id } = request.params;
  const user = users.find((user) => user.id === id);

  //deleta qualquer um se for adm
  if (user.isAdmin) {
    deleteUserService(id);
    return response.json({ message: "User deleted" });
  }
  //deleta apenas a si mesmos e naõ for adm
  if (!user.isAdmin && id === user.id) {
    return response.json({ message: "You deleted your account" });
  }
};

export default deleteUserController;

//arrumar rota de visualizar apenas o proprio usuário
