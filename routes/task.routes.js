const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");
const protect = require("../middlewares/auth.middleware");

router.post("/api/createtasks", protect, taskController.createTask);
router.get("/api/gettasks", protect, taskController.getAllTasks);
router.get("/api/getbypages", protect, taskController.getPages);
router.get("/api/singletasks/:id", protect, taskController.getSingleTask);
router.put("/api/updatetasks/:id", protect, taskController.updateTask);
router.delete("/api/deletetasks/:id", protect, taskController.deleteTask);

module.exports = router;