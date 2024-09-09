const chatinput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

let userText = null;
const API_KEY = (); // Put your key like this const API_KEY = "YOUR_KEY_HERE";

const createElement = (html, "className") => {
    // Create new div and apply chat, specified class and set html content of div
    const ChatDiv = document.createElement("div");
    ChatDiv.classList.add("chat", className);
    ChatDiv.innerHTML = html;
    return ChatDiv; // Return the created chat div 
    }


    const getChatRespone = () => {
        const API_URL = "https://api.openai.com/v1/completions";
        const pElement = document.createElement("p");

        // Define the properties and data for the API request        
        const requestOptions = {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify ({
                model: "text-davinci-003",
                prompt: userText,
                max_tokens: 2048,
                temperature: 0.2,
                top_p: 1,
                stop: null
            })
        }
        // Send POST request to API, get response and set the response as paragraph element text
        try {
            const response = await (await fetch(API_URL, requestOptions)).json();
            pElement.textContent = response.choices[0].text;
        } catch(error) {
            console.log(error);
        }


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

    // Create an incoming chat div with user's message and append it to chat container            
    const incomingChatDiv = createElement(html, "incoming")
    chatContainer.appendChild(incomingChatDiv);
    getChatRespone();    
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
