import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRATION } from "../config/jwt.js";

export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

export const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};