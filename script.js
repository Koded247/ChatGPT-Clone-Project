const chatinput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

let userText = null;

const createElement = (html, "className"); {
    const ChatDiv = document.createElement("div");
    ChatDiv.classList.add("chat", className);
    ChatDiv.innerHTML = html;
    return ChatDiv; // Return the created chat div 
    }


    const showingTypingAnimation = () => {
        const html = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="./chatgpt.jpeg" alt="Chatbot-img">
                            <div class="typing-animation">
                                <div class="typing-dot" styles="--delay: 0.2s"></div>
                                <div class="typing-dot" styles="--delay: 0.3s"></div>
                                <div class="typing-dot" styles="--delay: 0.4s"></div>
                            </div>
                        </div>
                        <span class="material-symbols-rounded">content_copy</span>
                    </div>`;

    // Create an outgoing chat div with user's message and append it to chat container            
    const outgoingChatDiv = createElement(html, "incoming")
    chatContainer.appendChild(outgoingChatDiv);

    }

const handleOutgoingChat = () => {
    userText = chatinput.value.trim(); // Get chatinput value and remove extra spaces
    const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="./user.jpeg" alt="user-img">
                        <p>${userText}</p>
                    </div>
                </div>`;

    // Create an outgoing chat div with user's message and append it to chat container            
    const outgoingChatDiv = createElement(html, "outgoing")
    chatContainer.appendChild(outgoingChatDiv);
    setTimeout(showingTypingAnimation, 500);           
}



sendButton.addEventListner("Click", handleOutgoingChat);
