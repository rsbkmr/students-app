import express from "express";
import dotenv from "dotenv";
import auth from "./middleware/auth.js";
import cors from "cors";
import loginRouter from "./routes/login.js";
import studentRouter from "./routes/student.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", loginRouter);
app.use("/student", auth, studentRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
