import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const { username, name, email } = request.only([
      "name",
      "username",
      "email",
    ]);

    const user = await User.create({
      username,
      name,
      email,
    });

    return user;
  }



  public async index() {
    const allUsers = await User.all()

    return allUsers
  };
}
