import express from "express";
import data from "../public/data.json";

const router = express.Router();

router.get("/api/booking", (req, res) => {
  res.json(data);
});

export default router;
