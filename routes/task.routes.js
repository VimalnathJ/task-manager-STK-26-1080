const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

router.post("/api/createtasks", taskController.createTask);
router.get("/api/gettasks", taskController.getAllTasks);
router.get("/api/singletasks:id", taskController.getSingleTask);
router.put("/api/updatetasks:id", taskController.updateTask);
router.delete("/api/deletetasks:id", taskController.deleteTask);

module.exports = router;