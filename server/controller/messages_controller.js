let messages = []
let messageId = 0

const Read = (req, res) => {
    res.json(messages)
}

const Create = (req,res) =>{

    let message = {
        time: req.body.time,
        text: req.body.text,
        messageId
    }

    messageId++
    messages.push(message)

    res.json(messages)
}

const Update = (req, res) => {
    messages[req.params.id]["text"] = req.body["text"]
    messages[req.params.id]["time"] = new Date()

    res.json(messages)
}

const Delete = (req, res) =>{
    let filteredMessages = messages.filter((message)=>{
        return message.messageId !== +req.params.id
    })

    messages = filteredMessages
    return res.json(messages)
}

module.exports = {
    Read,
    Create,
    Update,
    Delete
}   

    //     return messages
    // },
    
    // ,
    // Update: (text, id)=>{
    //     let message = {
    //         messageId,
    //         text
    //     }

    //     messages[messageId].text = message.text

    //     return messages
    // },
    // Delete: (id)=>{
    //     messages[messageId].splice()

    //     return messages
    // }