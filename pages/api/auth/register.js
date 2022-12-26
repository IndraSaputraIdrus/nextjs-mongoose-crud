import { connect } from "../../../libs/db";
import UserModel from "../../../models/UserModel";
import bcrypt from "bcrypt";

export default async function Register(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password, confirmPassword } = req.body;
  if (!username) return res.status(400).end();
  if (!password) return res.status(400).end();
  if (!confirmPassword) return res.status(400).end();

  if (password !== confirmPassword) {
    res.status(400);
    return res.json({ message: "failed, password not match" });
  }

  let statusCode = 200;
  let message = {
    message: "success",
  };

  try {
    await connect();

    // hash password
    const saltRound = 10;
    const newPassword = await bcrypt.hash(password, saltRound);

    const user = await UserModel.create({
      username,
      password: newPassword,
    });

    await user.save();
  } catch (error) {
    statusCode = 400;
    message = {
      message: "failed",
      error: error,
    };
  }
  res.status(statusCode);
  res.json(message);
}
