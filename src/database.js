import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pg;

const user = "postgres";
const password = "123456";
const host = "localhost";
const port = "5432";
const database = "laBoleria";

const connection = new Pool({
  user,
  password,
  host,
  port,
  database,
  /* connectionString: process.env.DATABASE_URL, */
});

export default connection;
