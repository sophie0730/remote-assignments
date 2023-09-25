import mysql from "mysql2";

import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

//get all users information
export async function getNotes() {
  const [rows] = await pool.query("SELECT * FROM user");
  return rows;
}

//get user information
export async function getUser(id) {
  const [rows] = await pool.query(`
    SELECT * 
    FROM user
    WHERE id = ${id}
  `);

  return rows;
}

//sign up
export async function createUser(email, password) {
  try {
    const [result] = await pool.query(
      `
          INSERT INTO user (email, password)
          VALUE(?, ?)
          `,
      [email, password]
    );

    return getUser(result.insertId);
  } catch (Error) {
    throw Error;
  }
}

export async function findUser(email) {
  try {
    const result = await pool.query(`SELECT * FROM user WHERE email = ?;`, [
      email,
    ]);

    return result[0][0];
  } catch (Error) {
    throw Error;
  }
}
