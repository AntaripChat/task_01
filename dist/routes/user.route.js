import contoller from '../controller/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
export default (app) => {
    app.post('/api/v1/signup', authMiddleware.userVali, contoller.signup),
        app.post('/api/v1/signin', contoller.signin);
};
