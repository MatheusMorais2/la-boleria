import { connection } from "../database.js";

export async function createCake(req, res) {
  const { name, price, description, image, flavourId } = req.body;

  try {
    const nameSearch = await connection.query(
      "SELECT * FROM cakes where name=$1",
      [name]
    );
    if (nameSearch.rows.length > 0) {
      return res.send("Cake name already exists").status(409);
    }

    const flavourSearch = await connection.query(
      "SELECT * FROM flavours where id=$1",
      [flavourId]
    );
    if (flavourSearch.rows.length === 0) {
      return res.send("Flavour id not found").status(404);
    }

    await connection.query(
      `
        INSERTO INTO cakes (name, price, description, image,,flavour)
        values ($1, $2, $3, $4, $5)
        `,
      [name, price, description, image, flavourId]
    );
  } catch {
    return res.sendStatus(500);
  }
}
