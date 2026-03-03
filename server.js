require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/task.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

//db connection
connectDB();

//test api
app.get("/", (req, res) => {
    res.send("Task manager running");
});

//task route api
app.use("/", taskRoutes);

//auth route api
app.use("/", authRoutes);

//port
const port = process.env.Port;
app.listen(port, () => {
    console.log("Server running on port " + port);
});