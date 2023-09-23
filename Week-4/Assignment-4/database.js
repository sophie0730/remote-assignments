import mysql from "mysql2";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const url =
  "https://newsapi.org/v2/everything?q=apple&from=2023-09-20&to=2023-09-20&sortBy=popularity&apiKey=681fd1f5842641f0bd4dfce46111b4a5";

async function fetchData(url) {
  const response = await axios.get(url);
  const resData = response.data;
  for (let i = 0; i < 30; i++) {
    insertData(
      resData.articles[i].title,
      resData.articles[i].content,
      resData.articles[i].author
    );
  }
}

fetchData(url);

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function insertData(title, content, author) {
  const [result] = await pool.query(
    `
      INSERT INTO article (title, content, author)
      VALUE(?, ?, ?)
    `,
    [title, content, author]
  );
}
