import { connect } from "../../../libs/db";
import siswaModel from "../../../models/SiswaModel";

export default async function getAllSiswa(req, res) {
  if (req.method !== "GET") return res.status(405).end();
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
