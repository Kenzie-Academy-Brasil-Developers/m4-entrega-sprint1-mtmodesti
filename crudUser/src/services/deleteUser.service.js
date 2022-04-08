import users from "../database";

const deleteUserService = (id) => {
    const deletedUser = users.find(user => user.id === id)
    const indexToBeDeleted = users.indexOf(deletedUser)
    users.splice(indexToBeDeleted, 1)
    return users
}

export default deleteUserService