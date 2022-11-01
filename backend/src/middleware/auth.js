import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ msg: "User not authenticated" });

  const decoded = jwt.decode(token, process.env.SECRET);
  if (!decoded) return res.status(403).json({ msg: "Invalid Token" });

  next();
};

export default auth;
