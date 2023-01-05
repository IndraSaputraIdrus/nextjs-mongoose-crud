import { connect } from "../../../libs/db";
import { verifyTokenApi } from "../../../middlewares/authPages";
import siswaModel from "../../../models/SiswaModel";

export default async function getSiswaById(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  verifyTokenApi(req, res);

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
    res.json({ message: error.message });
  }
}
