import contoller from '../controller/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import user from '../controller/user.con.js';
import authToken from "../middleware/authToken.js"
export default (app:any)=>{
    app.post('/api/v1/signup',authMiddleware.userVali,contoller.signup),
    app.post('/api/v1/signin',contoller.signin)
    app.get('/api/v1/user',[authToken],user)
};