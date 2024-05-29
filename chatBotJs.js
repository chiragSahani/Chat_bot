let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");
let sendMsgBtnEl = document.getElementById("sendMsgBtn");

function getReplyFromChatbot() {
    let noChat = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noChat) - 1];

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);
    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);


}


function sendMsgToChatbot() {
    let userMsg = userInputEl.value;
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);
    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);


    userInputEl.value = "";
    getReplyFromChatbot();
}
sendMsgBtnEl.onclick = function() {
    sendMsgToChatbot();
}