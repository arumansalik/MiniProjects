const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

const Reponses = {
  hi: "Hey...This chatbot🚀...ask me anything about suraj",
  "who is suraj":
    "Mohammed Suraj S/o Kamarudeen..",
  "who developed you": "Mohamed Suraj",
};

function getResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase().trim();
  return Reponses[lowerMessage] || "i don't understand what you're speaking";
}

function userReponse(message, sender) {
  const messageElement = document.createElement("p");
  messageElement.textContent = `${sender}: ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendButton.addEventListener("click", () => {
  const userMessage = userInput.value;
  if (userMessage) userReponse(userMessage, "YOU");
  const botResponse = getResponse(userMessage);
  userReponse(botResponse, "BOT");
  userInput.value = "";
});

userInput.addEventListener("keypress", () => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});