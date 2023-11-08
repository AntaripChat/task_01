import User from "../model/user.model.js";
import authConfig from "../config/auth.config.js";
import bcrypt from 'bcrypt';
import jsonwebtoken from "jsonwebtoken";
const secret = authConfig.secret;
const signup = async (req, res) => {
    const UserData = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    };
    try {
        const user = await User.create(UserData);
        res.status(200).send({ msg: `${user.name} Your data Save` });
    }
    catch (err) {
        res.status(500).send({
            msg: "Some Server Error"
        });
    }
    ;
};
const signin = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
        return res.status(400).send({ message: "invalid creds" });
    }
    ;
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordValid) {
        return res.status(400).send({ message: "invalid creds" });
    }
    ;
    let token = jsonwebtoken.sign({ email: user.email }, secret, { expiresIn: 86400 });
    res.status(200).send({
        name: user.name,
        email: user.email,
        accessToken: token
    });
};
export default {
    signup,
    signin
};
