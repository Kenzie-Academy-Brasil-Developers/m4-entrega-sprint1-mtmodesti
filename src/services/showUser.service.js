import users from "../database";

const showUserService = (curUser) => {
  const { id, createdOn, updatedOn, name, email, isAdm } = users.find(
    (user) => user.email === curUser
  );

  return {
    id,
    createdOn,
    updatedOn,
    name,
    email,
    isAdm,
  };
};

export default showUserService;
