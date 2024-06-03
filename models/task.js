let mongoose = require("mongoose");

let taskSchema = new mongoose.Schema({
    taskName : {type : String , 
        required : [true , 'must provide task']},
    completed: {type : Boolean}
},
{timestamps : true}
)
let task = mongoose.model("task" , taskSchema)

module.exports = task;