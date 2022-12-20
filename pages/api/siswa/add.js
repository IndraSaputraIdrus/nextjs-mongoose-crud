import { connect } from "../../../libs/db";
import siswaModel from "../../../models/SiswaModel";

export default async function AddSiswa(req, res) {
  if (req.method !== "POST") return res.status(405).end();

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
    message = { message: error.message };
  }

  res.status(statusCode);
  res.json(message);
}
