import { connection } from "../database.js";

export async function createClient(req, res) {
  const { name, phone, address } = req.body;

  try {
    await connection.query(
      `
            INSERT INTO clients (name, phone, address) 
            values $1, $2, $3, $4
        `,
      [name, phone, address]
    );

    return res.sendStatus(201);
  } catch {
    return res.sendStatus(500);
  }
}
