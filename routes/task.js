let express = require('express');
let {getalltask , createtask, singletask, updatetask, deletetask} = require("../controllers/task")
let router = express.Router();

router.route("/").get(getalltask).post(createtask)

router.route("/:idsss").get(singletask).patch(updatetask).delete(deletetask)


module.exports = router