import UserService from "../services/user.service.js";

class UserController {
  // // create new user
  // async createUser(req, res) {
  //   const userData = req.body;
  //   const newUser = await UserService.createUser(userData);
  //   res.status(201).send({
  //     success: true,
  //     newUser
  //   })
  // }

  // find all users
  async findUsers(req, res) {
    const users = await UserService.findUsers();
    res.status(200).send({
      success: true,
      users
    })
  }

  // find a user with query
  async findUser(req, res) {
    const userQuery = req.query;
    const user = await UserService.findUser(userQuery);
    res.status(200).send({
      success: true,
      user
    })
  }

  // update a user by id
  async updateUser(req, res) {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = await UserService.updateUser(userId, userData);
    res.status(200).send({
      success: true,
      updatedUser
    })
  }

  // delete a user by id
  async delUser(req, res) {
    const userId = req.params.id;
    const deletedUser = await UserService.delUser(userId);
    res.status(200).send({
      success: true,
      deletedUser
    })
  }
}

export default new UserController();