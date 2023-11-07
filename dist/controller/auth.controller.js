import bcrypt from 'bcrypt';
const signup = (req, res) => {
    const UserData = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    };
    res.status(200).send(UserData);
};
const signin = (req, res) => {
    const UserData = {
        email: req.body.email,
        password: req.body.password
    };
    res.status(200).send(UserData);
};
export default {
    signup,
    signin
};
