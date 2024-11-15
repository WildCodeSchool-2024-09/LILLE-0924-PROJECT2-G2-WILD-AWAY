import express, { type Request, type Response } from "express";
import data from "../public/data.json";

const router = express.Router();

router.get("/api/booking", (req: Request, res: Response) => {
  res.json(data);
});

router.get("/api/booking/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const result = data.items.filter(
    (item) => item.id === Number.parseInt(id, 10),
  );

  res.json(result[0] || null);
});

export default router;
