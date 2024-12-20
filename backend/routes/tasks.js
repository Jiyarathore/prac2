const express=require('express');
const Task=require('../models/Task');
const router=express.Router();

router.post('/tasks',async(req,res)=>{
    const {name} = req.body;
    const task = new Task({name, isRunning:false, elapsedTime:0,lastUpdated:new Date()});
    await task.save();
    res.status(201).json(task);
});

router.get('/tasks',async (req,res)=>{
    const tasks=await Task.find();
    res.json(tasks);
});

router.put('/tasks/:id',async (req,res)=>{
    const {id}=req.params;
    const {isRunning,elapsedTime}=req.body;

    const task=await Task.findById(id);
    if (!task) return res.status(404).send('Task not found');

    if (isRunning !== undefined) task.isRunning = isRunning;
  if (elapsedTime !== undefined) task.elapsedTime = elapsedTime;
   
  task.lastUpdated = new Date();
  await task.save();
  res.json(task);

});

module.exports=router;