import connection from "../database.js";

export async function createClient(req, res) {
  const { name, phone, address } = req.body;
  console.log("chegou no create client");

  try {
    await connection.query(
      `
            INSERT INTO clients (name, phone, address) 
            values ($1, $2, $3)
        `,
      [name, phone, address]
    );

    return res.sendStatus(201);
  } catch {
    return res.sendStatus(500);
  }
}

export async function getClientsOrders(req, res) {
  console.log("chegou no getClientsOrders");
  const clientId = req.params.id;

  try {
    const clientSearch = await connection.query(
      `
      SELECT * FROM clients WHERE id=$1
    `,
      [clientId]
    );
    if (clientSearch.rows.length === 0) return res.sendStatus(404);

    const orderSearch = await connection.query(
      `
      SELECT o.id as "orderId", o.quantity, o."createdAt", o."totalPrice", c.name as "cakeName"
      FROM orders o
      JOIN cakes c ON c.id = o."cakeId"
      WHERE o."clientId"=$1
    `,
      [clientId]
    );

    return res.status(200).send(orderSearch.rows);
  } catch {
    return res.sendStatus(500);
  }
}
