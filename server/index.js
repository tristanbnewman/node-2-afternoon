const express = require("express")
const app = express()
const messagesController = require("./controller/messages_controller")

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))
//app.use(express.static(__dirname + '/../public/build'));

app.post("/api/messages", messagesController.Create)
app.get("/api/messages", messagesController.Read)
app.put("/api/messages/:id", messagesController.Update)
app.delete("/api/messages/:id", messagesController.Delete)

app.listen(3001,()=>{
    console.log("listening on port 3001")
})