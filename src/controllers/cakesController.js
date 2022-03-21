import connection from "../database.js";

export async function createCake(req, res) {
  const { name, price, description, image, flavourId } = req.body;

  try {
    const nameSearch = await connection.query(
      "SELECT * FROM cakes where name=$1",
      [name]
    );
    if (nameSearch.rows.length > 0) {
      return res.sendStatus(409);
    }

    const flavourSearch = await connection.query(
      "SELECT * FROM flavours where id=$1",
      [flavourId]
    );
    if (flavourSearch.rows.length === 0) {
      return res.sendStatus(404);
    }

    await connection.query(
      `
        INSERT INTO cakes (name, price, description, image, "flavourId")
        values ($1, $2, $3, $4, $5)
        `,
      [name, price, description, image, flavourId]
    );

    return res.sendStatus(201);
  } catch {
    return res.sendStatus(500);
  }
}
