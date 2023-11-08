import app from "./app.js";
import config from "./config/server.config.js";
import userRoute from "./routes/user.route.js";
import dbConnect from "./config/db.config.js";
userRoute(app);
app.listen(config.PORT, async () => {
    await dbConnect();
    console.log(`App Running On ${config.PORT}`);
});
