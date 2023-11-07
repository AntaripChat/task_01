import contoller from '../controller/auth.controller.js'
export default (app:any)=>{
    app.post('/api/v1/signup',contoller.signup),
    app.post('/api/v1/signin',contoller.signin)
}