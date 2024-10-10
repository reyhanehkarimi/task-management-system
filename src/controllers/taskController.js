const Task = require("../models/taskModel");


exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error })
    }
};

exports.createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask)
    } catch (error) {
        res.status(400).json({ message: "error creating task", error })
    }
};

exports.updateTask = async (req,res) => {
    try {
        const taskId = req.params.id;
        const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, { new:true })
        if (!updatedTask) return res.status(404).json({ message: "task not found" });
        res.status(200).json(updatedTask)
    } catch (error) {
        req.status(404).json({ message: "error updating task", error})
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(taskId);
        if(!deletedTask) return res.status(404).json({ message: "task not found" });
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ message: "error deleting task", error })
    }
}

