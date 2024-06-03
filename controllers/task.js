let task = require("../models/task")

let getalltask = async (req ,res) => 
{
    try
    {
        let tasks = await task.find({})
        res.status(201).json(tasks);
    }
    catch(error)
    {
        res.status(500).json(error)
    }
    
}

let createtask = async(req ,res) => 
{
    try
    {
        let tasks = await task.create(req.body)
        res.status(201).json(tasks);
    }
    catch(error)
    {
        res.status(500).json(error)
    }
    
}

let singletask = async(req ,res) => 
{
    try
    {   
        let {idsss:taskid} = req.params
        // console.log(taskid)
        let tasks = await task.findOne({_id:taskid})
        return res.status(201).json(tasks);
        if (!tasks)
        {
        return res.status(404).json(tasks);
        }
    }
    catch(error)
    {
        res.status(500).json(error)
    }
}

let updatetask =async (req ,res) => 
{
    try
    {   let {idsss:taskid} = req.params;
        let newtask = req.body;
        console.log(newtask);
        let tasks = await task.findOneAndUpdate({_id:taskid }, newtask , newtask)
      
        if (!tasks)
        {
        return res.status(404).json(tasks);
        }
        res.status(201).json(tasks);
    }
    catch(error)
    {
        res.status(500).json(error)
    }
}

let deletetask = async(req ,res) => 
{
    try
    {   
        let {idsss:taskid} = req.params
        // console.log(taskid)
        let tasks = await task.findOneAndDelete({_id:taskid})
        return res.status(201).json(tasks);
        if (!tasks)
        {
        return res.status(404).json(tasks);
        }
    }
    catch(error)
    {
        res.status(500).json(error)
    }
}


module.exports = {getalltask, createtask, singletask, updatetask, deletetask, }