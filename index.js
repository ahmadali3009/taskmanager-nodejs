let express = require("express");
let {connect} = require("./connection");
let taskRouter = require("./routes/task");

let server = express();

let port = 8000 ;


connect('mongodb://127.0.0.1:27017/taskmanager').then(()=>{console.log("connection connected")}).catch((err)=>{console.log(err)})

server.use(express.json());
server.get("/" , (req , res) => 
{
    res.end("it,s task manager project")
})


server.use('/api/v1/tasks' , taskRouter)
server.listen(port ,()  => {
    console.log("the server is running")
})