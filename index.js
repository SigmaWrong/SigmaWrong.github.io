const messagesDiv = document.getElementById("messages");
const form = document.querySelector("#form");
const messageInput = document.querySelector("#message");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = messageInput.value;
    messagesDiv.innerHTML += `<p>${message}</p>`;
    messageInput.value = "";
  });
  setInterval(() => {
    const messages = ["Hello!", "How are you?", "I'm doing well, thank you!", "What's new?", "Not much, just chatting on this website"];
    const message = messages[Math.floor(Math.random() * messages.length)];
    messagesDiv.innerHTML += `<p>${message}</p>`;
  }, 5000);
  