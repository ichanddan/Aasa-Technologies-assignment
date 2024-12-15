import db from "../model/index.js";
import handler from "../util/handler.js";
import bcrypt from "bcryptjs";

const Signup = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;
    const cheekEmail = await db.User.findOne({ where: { Email: Email } });
    if (cheekEmail) return handler.handleConflict(res, 409, "Email already exists");

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

export default {
  Signup,
};
