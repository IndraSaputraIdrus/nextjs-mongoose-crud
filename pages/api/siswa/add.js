import { connect } from "../../../libs/db";
import { verifyTokenApi } from "../../../middlewares/authPages";
import siswaModel from "../../../models/SiswaModel";

export default async function AddSiswa(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  verifyTokenApi(req, res);

  const { name, email } = req.body;
  if (!name) return res.status(400).end();
  if (!email) return res.status(400).end();

  let statusCode;
  let message;

  try {
    await connect();

    const siswa = await siswaModel.create({
      name,
      email,
    });

    await siswa.save();

    statusCode = 200;
    message = { message: "success" };
  } catch (error) {
    statusCode = 400;
    message = { message: error.message };
  }

  res.status(statusCode);
  res.json(message);
}
