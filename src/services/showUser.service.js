import users from "../database";

const showUserService = (currentUserEmail) => {
  const { id, createdOn, updatedOn, name, email, isAdm } = users.find(
    (user) => user.email === currentUserEmail
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
