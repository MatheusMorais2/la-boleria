import connection from "../database.js";
import dayjs from "dayjs";

export async function createOrder(req, res) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;

  try {
    const clientSearch = await connection.query(
      `
            SELECT * FROM clients where id=$1
        `,
      [clientId]
    );
    if (clientSearch.rows.length === 0) return res.sendStatus(404);

    const cakeSearch = await connection.query(
      `
        SELECT * FROM cakes where id=$1
    `,
      [cakeId]
    );
    if (cakeSearch.rows.length === 0) return res.sendStatus(404);

    const createdAt = dayjs();

    await connection.query(
      `
            INSERT INTO orders 
            ("clientId", "cakeId", quantity, "createdAt", "totalPrice")
            values ($1, $2, $3, $4, $5)
        `,
      [clientId, cakeId, quantity, createdAt, totalPrice]
    );

    return res.sendStatus(201);
  } catch {
    return res.sendStatus(500);
  }
}

export async function getOrders(req, res) {
  let dateQuery = "";
  let orderSearch;

  try {
    if (req.query.date) {
      orderSearch = await connection.query({
        text: `
            SELECT 
              orders.*, 
              clients.*, 
              cakes.*, 
              flavours.* FROM orders
              JOIN clients on clients.id = orders."clientId" 
              JOIN cakes on cakes.id = orders."cakeId"
              JOIN flavours on cakes."flavourId"=flavours.id
              WHERE orders."createdAt"::text LIKE $1
          `,
        values: [`${req.query.date}`],
        rowMode: "array",
      });

      return res
        .send(
          orderSearch.rows.map((row) => {
            const [
              orderId,
              clientId1,
              cakeId1,
              quantity,
              createdAt,
              totalPrice,
              isDelivered,
              clientId2,
              clientName,
              clientAddress,
              clientPhone,
              cakeId2,
              cakeName,
              cakePrice,
              cakeImage,
              cakeDescription,
              flavourId1,
              flavourId2,
              flavour,
            ] = row;

            return {
              client: {
                id: clientId1,
                name: clientName,
                address: clientAddress,
                phone: clientPhone,
              },
              cake: {
                id: cakeId1,
                name: cakeName,
                price: cakePrice,
                description: cakeDescription,
                image: cakeImage,
                flavour: flavour,
              },
              createdAt: createdAt,
              quantity: quantity,
              totalPrice: totalPrice,
              isDelivered: isDelivered,
            };
          })
        )
        .status(200);
    } else {
      orderSearch = await connection.query({
        text: `
          SELECT 
            orders.*, 
            clients.*, 
            cakes.*, 
            flavours.* FROM orders
            JOIN clients on clients.id = orders."clientId" 
            JOIN cakes on cakes.id = orders."cakeId"
            JOIN flavours on cakes."flavourId"=flavours.id
            
        `,
        rowMode: "array",
      });

      return res
        .send(
          orderSearch.rows.map((row) => {
            const [
              orderId,
              clientId1,
              cakeId1,
              quantity,
              createdAt,
              totalPrice,
              isDelivered,
              clientId2,
              clientName,
              clientAddress,
              clientPhone,
              cakeId2,
              cakeName,
              cakePrice,
              cakeImage,
              cakeDescription,
              flavourId1,
              flavourId2,
              flavour,
            ] = row;

            return {
              client: {
                id: clientId1,
                name: clientName,
                address: clientAddress,
                phone: clientPhone,
              },
              cake: {
                id: cakeId1,
                name: cakeName,
                price: cakePrice,
                description: cakeDescription,
                image: cakeImage,
                flavour: flavour,
              },
              createdAt: createdAt,
              quantity: quantity,
              totalPrice: totalPrice,
              isDelivered: isDelivered,
            };
          })
        )
        .status(200);
    }
  } catch {
    return res.sendStatus(500);
  }
}

export async function getSpecificOrder(req, res) {
  const id = req.params.id;

  try {
    const orderSearch = await connection.query({
      rowMode: "array",
      text: `
      SELECT 
        orders.*, 
        clients.*, 
        cakes.*, 
        flavours.* FROM orders
        JOIN clients on clients.id = orders."clientId" 
        JOIN cakes on cakes.id = orders."cakeId"
        JOIN flavours on cakes."flavourId"=flavours.id
        WHERE orders.id=$1
    `,
      values: [id],
    });

    return res
      .send(
        orderSearch.rows.map((row) => {
          const [
            orderId,
            clientId1,
            cakeId1,
            quantity,
            createdAt,
            totalPrice,
            isDelivered,
            clientId2,
            clientName,
            clientAddress,
            clientPhone,
            cakeId2,
            cakeName,
            cakePrice,
            cakeImage,
            cakeDescription,
            flavourId1,
            flavourId2,
            flavour,
          ] = row;

          return {
            client: {
              id: clientId1,
              name: clientName,
              address: clientAddress,
              phone: clientPhone,
            },
            cake: {
              id: cakeId1,
              name: cakeName,
              price: cakePrice,
              description: cakeDescription,
              image: cakeImage,
              flavour: flavour,
            },
            createdAt: createdAt,
            quantity: quantity,
            totalPrice: totalPrice,
            isDelivered: isDelivered,
          };
        })
      )
      .status(200);
  } catch {
    return res.sendStatus(500);
  }
}

export async function updateDelivery(req, res) {
  const orderId = req.params.id;

  try {
    const orderIdSearch = await connection.query(
      `SELECT * FROM orders where id=$1`,
      [orderId]
    );
    if (orderIdSearch.rows.length === 0) {
      return res.sendStatus(404);
    }

    await connection.query(
      `UPDATE orders SET "isDelivered" = true WHERE id=$1`,
      [orderId]
    );

    return res.sendStatus(204);
  } catch {
    return res.sendStatus(500);
  }
}
