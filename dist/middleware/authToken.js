import jsonwebtoken from "jsonwebtoken";
import authConfig from "../config/auth.config.js";
const secret = authConfig.secret;
const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({ message: "No Token Provided" });
    }
    jsonwebtoken.verify(token, secret, (err, payload) => {
        if (err) {
            return res.status(403).send({ message: "Invalid JWT token" });
        }
        req.body.email = payload.email;
        next();
    });
};
export default verifyToken;
