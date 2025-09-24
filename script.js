document.addEventListener('DOMContentLoaded', () => {

    /**
     * Initializes the main chat functionality.
     * 
     */

    const initChat = () => {
        const chatBox = document.getElementById('chat-box');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');

        if (!chatBox || !userInput || !sendBtn) return;

        const createMessageElement = (text, sender) => {
            const messageWrapper = document.createElement('div');
            messageWrapper.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
            const avatar = document.createElement('div');
            avatar.classList.add('profile-avatar');
            const messageContent = document.createElement('div');
            messageContent.classList.add('message-content');
            const paragraph = document.createElement('p');
            paragraph.textContent = text;
            messageContent.appendChild(paragraph);

            if (sender === 'user') {
                avatar.textContent = 'U';
            } else {
                avatar.classList.add('ai-avatar');
                const icon = document.createElement('i');
                icon.className = 'ph-bold ph-robot';
                avatar.appendChild(icon);
            }
            messageWrapper.appendChild(avatar);
            messageWrapper.appendChild(messageContent);
            return messageWrapper;
        };

        const addMessage = (text, sender) => {
            const messageElement = createMessageElement(text, sender);
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        };

        // --- MODIFIED FUNCTION ---
        const sendMessage = () => {
            const text = userInput.value.trim();
            if (text === '') return;
            addMessage(text, 'user');
            userInput.value = '';

            // Simulate AI thinking time
            setTimeout(() => {
                let aiResponse;
                const userText = text.toLowerCase(); // For case-insensitive matching

                // Check if the user's message includes "operating system"
                if (userText.includes('computer networks')) {
                    aiResponse = "Computer Networks are a collection of interconnected computers and devices that can communicate with each other and share resources such as files, applications, printers, and internet connections. The connection can be established using wired (like cables) or wireless (like Wi-Fi, Bluetooth) technologies..";
                }
                else if (userText.includes('object oriented programming')) {
                    aiResponse = "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which combine data (attributes) and functions (methods) into a single unit to model real-world entities and promote reusability, modularity, and scalability.";
                }
                else if (userText.includes('operating system')) {
                    aiResponse = "An Operating System (OS) is the core software that manages all the hardware and software resources of a computer. It acts as an intermediary between the computer hardware and the end-user. Key functions include process management, memory management, file system management, and handling input/output. Popular examples include Microsoft Windows, macOS, and Linux for desktops, and Android and iOS for mobile devices.";
                } else {
                    aiResponse = "I'm sorry, I can only provide information about operating system, computer networks and OOPS at the moment. Please try asking 'what is an operating system?'.";
                }
                addMessage(aiResponse, 'ai');
            }, 1200);
        };
        // --- END OF MODIFICATION ---

        sendBtn.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') sendMessage();
        });
    };

    /**
     * Initializes the toggle functionality for the history section.
     */
    const initHistoryToggle = () => {
        const toggleHistoryBtn = document.getElementById('toggle-history');
        const historyList = document.getElementById('history-list');
        if (toggleHistoryBtn && historyList) {
            toggleHistoryBtn.addEventListener('click', () => {
                historyList.classList.toggle('hidden');
                toggleHistoryBtn.classList.toggle('collapsed');
            });
        }
    };

    /**
     * Initializes the main sidebar slide-in/out functionality.
     */
    const initSidebarToggle = () => {
        const appLayout = document.querySelector('.app-layout');
        const toggleBtnInSidebar = document.getElementById('toggle-sidebar-btn');
        const toggleBtnInMain = document.getElementById('main-toggle-sidebar-btn');
        const backdrop = document.getElementById('sidebar-backdrop');

        if (!appLayout) return;
        
        const toggle = () => appLayout.classList.toggle('sidebar-hidden');

        if (toggleBtnInSidebar) toggleBtnInSidebar.addEventListener('click', toggle);
        if (toggleBtnInMain) toggleBtnInMain.addEventListener('click', toggle);
        if (backdrop) backdrop.addEventListener('click', toggle);
    };

    // --- Initialize all functionalities ---
    initChat();
    initHistoryToggle();
    initSidebarToggle();
});