const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "LuckyMoyane123.",
  database: "afriboutique",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;
  const unitsInStock = req.body.unitsInStock;
  const title = req.body.title;

  db.query(
    "INSERT INTO products (name, price, description, unitsInStock, title) VALUES (?,?,?,?,?)",
    [name, price, description, unitsInStock, title],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const idproducts = req.body.idproducts;
  const price = req.body.price;
  db.query(
    "UPDATE products SET price = ? WHERE idproducts = ?",
    [price, idproducts],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const idproducts = req.params.idproducts;
  console.log("delete : " + idproducts)
  db.query("DELETE FROM products WHERE idproducts = ?", [idproducts], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("no error" + idproducts)
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001 ...");
});
