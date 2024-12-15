import db from "../model/index.js";
import handler from "../util/handler.js";
import bcrypt from "bcryptjs";
// import generateToken from "../middlewares/Jwt.js";
import Jwt from "../middlewares/Jwt.js";
const Signup = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;
    const cheekEmail = await db.User.findOne({ where: { Email: Email } });
    if (cheekEmail)
      return handler.handleConflict(res, 409, "Email already exists");

    const hashPassword = await bcrypt.hash(Password, 10);

    const user = await db.User.create({ Name, Email, Password: hashPassword });
    if (user) {
      return handler.handleSuccess(res, 200, "Signup Successfully...");
    } else {
      return handler.handleError(res, 400, "Failed to signup...");
    }
  } catch (error) {
    console.log(error);
    return handler.handleInternalServerError(res, 500);
  }
};

const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const User = await db.User.findOne({ where: { Email: Email } });

    const isValid = await bcrypt.compareSync(Password, User.Password);

    if (!isValid) {
      handler.handleError(res, 400, "Invalid password");
    }
    const token = await Jwt.generateToken({id:User.id});
    return handler.handleSuccess(res, 200, "Signup Successfully...", {
      token,
      User,
    });
  } catch (error) {
    console.log(error);
    return handler.handleInternalServerError(res);
  }
};

export default {
  Signup,
  Login,
};
