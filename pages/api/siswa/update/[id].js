import { connect } from "../../../../libs/db";
import siswaModel from "../../../../models/SiswaModel";

export default async function UpdateById(req, res) {
  if (req.method !== "PUT") return res.status(405).end();

  const { id } = req.query;
  const { name, email } = req.body;

  let statusCode;
  let message;

  try {
    await connect();

    const siswa = await siswaModel.updateOne(
      {
        _id: id,
      },
      {
        name,
        email,
      }
    );

    statusCode = 200;
    message = { message: "success", detail: siswa };
  } catch (error) {
    statusCode = 400;
    message = { message: "bad request" };
  }

  res.status(statusCode);
  res.json(message);
}
