require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/task.routes");

const app = express();

app.use(express.json());

//db connection
connectDB();

//route api
app.use("/", taskRoutes);

//test api
app.get("/", (req, resa) => {
    resa.send("Task manager running");
});

//port
const port = process.env.Port;
app.listen(port, () => {
    console.log("Server running on port " + port);
});