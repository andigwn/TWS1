import { verifyToken } from "../helpers/jwt.helper.js";
import { prismaClient } from "../application/database.js";

export const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.get("Authorization");
        if (!authHeader?.startsWith("Bearer ")) {
            return res.status(401).json({ errors: "Unauthorized" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = verifyToken(token);

        const user = await prismaClient.user.findFirst({
            where: {
                username: decoded.username,
                token: token
            }
        });

        if (!user) {
            return res.status(401).json({ errors: "Unauthorized" });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ errors: "Invalid token" });
    }
};