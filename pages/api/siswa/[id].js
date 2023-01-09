import { connect } from "../../../libs/db";
import siswaModel from "../../../models/SiswaModel";

export default async function getSiswaById(req, res) {
  if (req.method !== "GET") return res.status(405).end();
  const { id } = req.query;
  try {
    await connect();

    const siswa = await siswaModel.findOne({
      _id: id,
    });

    res.status(200);
    res.json(siswa);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
}
