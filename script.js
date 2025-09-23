document.addEventListener('DOMContentLoaded', () => {

    /**
     * Initializes the main chat functionality.
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

        const sendMessage = () => {
            const text = userInput.value.trim();
            if (text === '') return;
            addMessage(text, 'user');
            userInput.value = '';
            setTimeout(() => {
                const aiResponse = "This new slide-in sidebar feels much more modern and responsive!";
                addMessage(aiResponse, 'ai');
            }, 1200);
        };

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