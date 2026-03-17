const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
task: String,
completed: Boolean,
userId: String
})

module.exports = mongoose.model("Task", TaskSchema)