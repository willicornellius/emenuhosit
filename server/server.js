import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import midtransClient from "midtrans-client";
import axios from "axios";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import bodyParser from "body-parser";
// import callbackRoutes from "./Routes/callbackRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
// app.post("/api/finish", (req, res) => {
//   console.log(req);

// });
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.get("/");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// midtrans
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});
app.post("/api/midtrans", (req, res) => {
  const name = req.body.productName;
  const total = req.body.tax + req.body.productPrice * req.body.qty;
  // const nameString = JSON.stringify(name);
  // const nameJSON = JSON.parse(nameString);

  console.log(req.body, "total:", total);
  // console.log(nameJSON.name);

  let parameter = {
    transaction_details: {
      order_id: uuidv4(),
      gross_amount: req.body.amount,
    },
    credit_card: {
      secure: true,
    },
    item_details: {
      id: "ITEM1",
      price: req.body.amount / req.body.qty,
      quantity: req.body.qty,
      name: name,
      brand: "Midtrans",
      category: "Laundry",
      merchant_name: "Hars Shoe Cleaner",
    },

    customer_details: {
      first_name: req.body.name,
      last_name: "-",
      email: req.body.email,
      phone: "08111222333",
    },
    // item_details: [
    //   {
    //     price: req.body.productPrice,
    //     name: req.body.productName,
    //     quantity: req.body.qty,
    //   },
    // ],
  };
  snap.createTransaction(parameter).then((transaction) => {
    let transactionToken = transaction.token;
    console.log("transactionToken:", transactionToken);
    res.send(transactionToken);
  });
});

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
