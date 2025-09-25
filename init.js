const mongoose = require('mongoose')
const Chat = require("./models/chat")

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
}

let allChats = [
  {
    from:"neha",
    to:"priya",
    msg:"Send me exam schedule",
    created_at: new Date()
  },
  {
    from:"rohan",
    to:"rahul",
    msg:"Hello",
    created_at: new Date()
  },
  {
    from:"neeta",
    to:"priyanshu",
    msg:"How are you?",
    created_at: new Date()
  }
]
Chat.insertMany(allChats);
