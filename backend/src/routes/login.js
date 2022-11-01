import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const user = {
  username: "admin",
  password: "admin",
};

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username !== user.username)
    return res.status(404).json({ msg: "User not found" });
  if (password !== user.password)
    return res.status(403).json({ msg: "Incorrect Password" });

  const token = jwt.sign({}, process.env.SECRET);
  res.json({ token });
});

export default router;
