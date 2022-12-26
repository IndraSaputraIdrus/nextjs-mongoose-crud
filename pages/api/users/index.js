import { connect } from "../../../libs/db";
import UserModel from "../../../models/UserModel";
export default async function getAllUser(req, res) {
  if (req.method !== "GET") return res.status(405).end();
  try {
    await connect();

    const users = await UserModel.find();

    res.status(200);
    res.json(users);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
}
