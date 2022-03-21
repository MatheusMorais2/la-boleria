import connection from "../database.js";

export async function createFlavour(req, res) {
  const { name } = req.body;

  try {
    const flavourSearch = await connection.query(
      `
            SELECT * FROM flavours
            where name=$1
        `,
      [name]
    );

    console.log("flavourSearch: ", flavourSearch.rows);

    if (flavourSearch.rows.length > 0) return res.sendStatus(409);

    await connection.query(
      `
            INSERT INTO flavours (name)
            values ($1)
        `,
      [name]
    );

    return res.sendStatus(201);
  } catch {
    return res.sendStatus(500);
  }
}
