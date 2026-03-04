const Task = require("../models/task.model.js");

//create task
exports.createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }
    catch (error){
        res.status(400).json({message : error.message});
    }
};

//get all tasks
exports.getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch(error) {
        res.status(500).json({message : error.message});
    }
};

//get tasks by pages
exports.getPages = async (req, res) => {
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const totalTasks = await Task.countDocuments();

        const tasks = await Task.find().skip(skip).limit(limit);

        res.status(200).json(
            {totalTasks,
            "currentPage" : page,
            tasks});
    }

    catch (error) {
        res.status(500).json({message : error.message});
    }
};

//get single task
exports.getSingleTask = async (req, res) => {
    try{
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({message : "Task not found"});
        }

        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json({message : "Invalid ID"});
    }
};

//update task
exports.updateTask = async (req ,res) => {
    try{
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true, runValidators : true}
        );

        if (!task) {
            return res.status(404).json({message : "Task not found"});
        }

        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json({message : error.message});
    }
};

//delete task
exports.deleteTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({message : "Task not found"});
        }

        res.status(200).json({message : "Task deleted"});
    }
    catch (error) {
        res.status(400).json({message : error.message});
    }
};