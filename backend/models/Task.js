const mongoose = require('mongoose');

const taskSchema= new mongoose.Schema({
    name: String,
    isRunning: Boolean,
    elapsedTime: Number,
    lastUpdated: Date,
});

module.exports = mongoose.model('Task',taskSchema);