import { connect } from "../../../libs/db";
import { verifyTokenApi } from "../../../middlewares/authPages";
import siswaModel from "../../../models/SiswaModel";

export default async function getAllSiswa(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  verifyTokenApi(req, res);

  try {
    await connect();

    const siswa = await siswaModel.find();

    res.status(200);
    res.json(siswa);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
}
