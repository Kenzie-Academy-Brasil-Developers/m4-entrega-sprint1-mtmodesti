import users from "../database";

const updateUserService = ({id,name, email,password}) => {
  const findUser = users.find((user) => user.id === id.id);
  const indexOfUser = users.indexOf(findUser);
console.log(indexOfUser)
  const today = new Date();
  const date =
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear() +
    " - " +
    today.getHours() +
    ":" +
    today.getMinutes();

  if (findUser.isAdmin === true) {
    const newUser = {
      name: name || findUser.name,
      email: email || findUser.email,
      password: password || findUser.password,
      isAdmin: findUser.isAdmin,
      id: findUser.id,
      createdOn: findUser.createdOn,
      updatedOn: today,
    };
    users[indexOfUser] = newUser;
    return newUser;
    //função para editar qualquer um
  }
  if (findUser.isAdmin === false) {
    //função para editar só ele mesmo
  }
  return users;
};

export default updateUserService;
