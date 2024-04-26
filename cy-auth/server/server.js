const express = require("express");
const cors = require("cors");
const bcryptjs = require("bcryptjs");

const app = express();

app.use(express.json());
app.use(cors());

const chats = [];

app.post("/api/messages", (req, res) => {
  console.log(req.body);

  const { message, pin } = req.body;
  let pinExists = false;
  let currentChat;
  for (let i = 0; i < chats.length; i++) {
    currentChat = chats[i];
    pinExists = bcryptjs.compareSync(pin, currentChat.pin);

    if (pinExists) {
      break; // Exit the loop.
    }
  }

  if (!pinExists) {
    const hashedPin = bcryptjs.hashSync(pin);
    console.log("Generated hashed and salted pin:", hashedPin);

    const newChat = {
      pin: hashedPin,
      messages: [message],
    };
    chats.push(newChat);

    console.log("Created a new chat session: ", newChat);

    currentChat = newChat;
  } else {

    currentChat.messages.push(message);
  }


  res.status(200).send({ messages: currentChat.messages });

  console.log("Sent the messages: ", currentChat.messages);
});

app.listen(8000, () => console.log("Running on port 8000"));
