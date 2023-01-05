import siswaModel from "../../../../models/SiswaModel";
import { connect } from "../../../../libs/db";
import { verifyTokenApi } from "../../../../middlewares/authPages";

export default async function DeleteSiswa(req, res) {
  if (req.method !== "DELETE") return res.status(405).end();

  verifyTokenApi(req, res);

  const { id } = req.query;
  let statusCode;
  let message;
  try {
    await connect();

    const siswa = await siswaModel.deleteOne({
      _id: id,
    });

    if (siswa.deletedCount === 0) {
      throw new Error("data not found");
    }

    statusCode = 200;
    message = { message: `delete count: ${siswa.deletedCount}` };
  } catch (error) {
    statusCode = 400;
    message = { message: error.message };
  }
  res.status(statusCode);
  res.json(message);
}
