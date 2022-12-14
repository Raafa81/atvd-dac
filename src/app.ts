import express, { Request, Response } from "express";
import fs from "fs";

const app = express();

type User = {
  email: string;
  senha: string;
};

app.use(express.json({ limit: "200mb" }));

app.post("/", async (req: Request, res: Response) => {
  const { email, senha } = <User>req.body;
  try {
    const data = `Email,Senha`;
    fs.writeFileSync("data.csv", `${data}\n ${email},${senha}`);
    return res.status(200).json({ status: "Feito!!" });
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.listen(3000);
