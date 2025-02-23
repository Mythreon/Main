/* This is the only time I'm judging you for datamining this website.
don't.
please.
listen.
don't.
You have better things to do than reading this particular space of the website, this is 10000 lines long.
stop.
please.
listen.
class dismissed!*/
document.addEventListener("DOMContentLoaded", function() {
    const chatbox = document.getElementById('chatbox');
    const chatOptions = document.getElementById('chat-options');

    const conversationFlow = [
        {
            message: "Welcome! How can I help you today?",
            options: [
                { text: "Tell me about Mythreon.", nextOption: 1 },
                { text: "I need help.", nextOption: 2 }
            ],
        },
        {
            message: "Mythreon is a website offering innovative solutions. How can I assist you further?",
            options: [ 
                { text: "Rock paper scrisors.", nextOption: 3 },
                { text: "I don't want to progress.", nextOption: 1},
            ],
        },
        {
            message: "Sure! What do you need help with?",
            options: [
                { text: "Classical chatting.", nextOption: 4},
                { text: "I don't know where I am", nextOption: 5},
            ],
        },
        {
            message: "I need help with nothing.",
            options: [

            ]
        },
        {
            message: "Classical chatting I see. If you'd want to, I can redirect you to the clinic for wining smalltalkers. However, tragicly there is no option to do that.",
            options: [
                { text: "THEN WHAT IS THIS?", nextOption: 0},
            ]
        },
        {
            message: "Ahh.. You're in the backrooms of Mythreon. I personally have been here for 230 years and counting, you're one of the few people that I've seen come here. I don't know how to leave but I like talking with people, otherwise I'd be crying in the corner like Reggie there.",
            options: [
                { text: "I see, how can I get out of here?", nextOption: 6},
                { text: "I want to stay here, forever and ever.", nextOption: 7},
            ]
        },
// This is 5, will edit the rest to be in tomorrow. And forever.
    ];

    function addChatMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message');
        messageDiv.classList.add(isUser ? 'user-message' : 'chatbot-message');
        messageDiv.innerText = message;

        chatbox.appendChild(messageDiv);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function addChatOptions(options) {
        chatOptions.innerHTML = ''; 

        options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('chat-option');
            button.innerText = option.text;

            button.addEventListener('click', () => {
                console.log("Button clicked, going to message index:", option.nextOption);
                goToMessage(option.nextOption);
            });

            chatOptions.appendChild(button);
        });
    }

    function clearChat() {
        chatbox.innerHTML = '';
        chatOptions.innerHTML = '';
    }

    function goToMessage(index) {
        if (index >= 0 && index < conversationFlow.length) {
            const currentMessage = conversationFlow[index];
            clearChat();
            addChatMessage(currentMessage.message);
            addChatOptions(currentMessage.options);
        }
    }

    function startChat() {
        clearChat();
        goToMessage(0);
    }

    startChat();
});
