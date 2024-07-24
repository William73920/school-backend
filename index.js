import express from "express";
import cors from "cors";
import schoolRouter from "./routes/school.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/schools", schoolRouter);

app.use("/schoolImages", express.static(path.join(__dirname, "schoolImages")));

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({ success: false, status, message });
});

app.listen(5000, () => {
  console.log(`Server is running on port` + 5000);
});
