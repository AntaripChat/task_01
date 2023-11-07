import app from "./app.js";
import config from "./config/server.config.js";
import userRoute from "./routes/user.route.js";
import dbConnect from "./config/db.config.js";
userRoute(app);
const PORT = config.PORT;
app.listen(PORT, async () => {
    await dbConnect();
    console.log(`App Running On ${PORT}`);
});
