import { connect } from "../../../libs/db";
import UserModel from "../../../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function Login(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password } = req.body;
  if (!username) return res.status(400).end();
  if (!password) return res.status(400).end();

  let statusCode = 200;
  let message = {
    message: "success",
  };

  try {
    await connect();

    const user = await UserModel.findOne({
      username,
    });

    if (!user) {
      throw "User not found";
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      throw "Wrong passowrd";
    }

    const token = jwt.sign({ username, password }, process.env.PRIVATE_KEY, {
      expiresIn: "7d",
    });

    statusCode = 200;
    message = {
      message: "success",
      token,
    };
  } catch (error) {
    console.log(error);
    statusCode = 400;
    message = {
      message: "failed",
      error: error,
    };
  }

  res.status(statusCode);
  res.json(message);
}
