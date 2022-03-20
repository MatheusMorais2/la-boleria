import { connection } from "../database.js";
import dayjs from "dayjs";

export async function createOrder(req, res) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;

  try {
    const clientSearch = connection.query(
      `
            SELECT * FROM clients where id=$1
        `,
      [clientId]
    );
    if (clientSearch.rows.length === 0)
      return res.send("Client not found").status(404);

    const cakeSearch = connection.query(
      `
        SELECT * FROM cakes where id=$1
    `,
      [cakeId]
    );
    if (cakeSearch.rows.length === 0)
      return res.send("Cake not found").status(404);

    const createdAt = dayjs();

    await connection.query(
      `
            INSERT INTO orders 
            (clientId, cakeId, quantity, createdAt, totalPrice)
            values $1, $2, $3, $4, $5
        `,
      [clientId, cakeId, quantity, createdAt, totalPrice]
    );

    return res.sendStatus(201);
  } catch {
    return res.sendStatus(500);
  }
}
