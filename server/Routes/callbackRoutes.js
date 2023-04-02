import express from "express";
import asyncHandler from "express-async-handler";

const callbackRouter = express.Router();

//callback
callbackRouter.post("/"),
  asyncHandler(async (req, res) => {
    console.log(req.body);
  });
export default callbackRouter;
