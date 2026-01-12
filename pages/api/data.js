import path from "path";
import { readFile } from "fs/promises";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "data.json");
  const raw = await readFile(filePath, "utf8");
  const data = JSON.parse(raw);

  res.status(200).json(data);
}
