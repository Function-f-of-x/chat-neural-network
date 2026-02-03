/**
 * CHAT ENGINE
 * Handles user interactions, neural network inference, and UI updates
 */

class ChatEngine {
    constructor() {
        this.initElements();
        this.initEventListeners();
        this.isProcessing = false;
        this.networkReady = false;
        
        // Wait for neural network to be ready
        document.addEventListener('networkReady', () => {
            this.networkReady = true;
            this.hideLoadingState();
        });
    }
    
    initElements() {
        this.messagesContainer = document.getElementById('chat-messages');
        this.userInput = document.getElementById('user-input');
        this.sendButton = document.getElementById('send-button');
        this.typingIndicator = document.getElementById('typing-indicator');
        this.clearChatButton = document.getElementById('clear-chat');
        this.exportChatButton = document.getElementById('export-chat');
        this.themeToggleButton = document.getElementById('theme-toggle');
        this.voiceToggleButton = document.getElementById('voice-toggle');
        this.howItWorksLink = document.getElementById('how-it-works');
        this.closeModalButton = document.getElementById('close-modal');
        this.modal = document.getElementById('how-it-works-modal');
    }
    
    initEventListeners() {
        // Send message on button click
        this.sendButton.addEventListener('click', () => this.handleSendMessage());
        
        // Send message on Enter key (but allow Shift+Enter for new line)
        this.userInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSendMessage();
            }
        });
        
        // Clear chat history
        this.clearChatButton.addEventListener('click', () => this.handleClearChat());
        
        // Export chat history
        this.exportChatButton.addEventListener('click', () => chatHistory.export());
        
        // Toggle theme
        this.themeToggleButton.addEventListener('click', () => themeManager.toggleTheme());
        
        // Voice input toggle
        this.voiceToggleButton.addEventListener('click', () => voiceHandler.toggleRecording());
        
        // How it works modal
        this.howItWorksLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.showModal();
        });
        
        this.closeModalButton.addEventListener('click', () => this.hideModal());
        
        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });
        
        // Copy message functionality
        this.messagesContainer.addEventListener('click', (e) => {
            if (e.target.closest('.message-content')) {
                const messageContent = e.target.closest('.message-content').querySelector('p').textContent;
                copyToClipboard(messageContent);
            }
        });
    }
    
    handleSendMessage() {
        const inputText = this.userInput.value.trim();
        if (!inputText || this.isProcessing) return;
        
        // Add user message to chat
        this.addMessage(inputText, true);
        
        // Clear input and reset height
        this.userInput.value = '';
        this.userInput.style.height = 'auto';
        
        // Show typing indicator
        this.showTypingIndicator();
        this.isProcessing = true;
        
        // Process message asynchronously
        setTimeout(() => {
            this.processUserInput(inputText);
        }, 300);
    }
    
    processUserInput(inputText) {
        if (!this.networkReady) {
            this.addMessage("Neural network is still initializing. Please wait a moment...", false);
            this.hideTypingIndicator();
            this.isProcessing = false;
            return;
        }
        
        // Get response from neural network (simulated with training data)
        const response = getResponse(inputText);
        
        // Add response after a slight delay for UX
        setTimeout(() => {
            this.addMessage(response, false);
            this.hideTypingIndicator();
            this.isProcessing = false;
        }, 800 + Math.random() * 1000); // Simulate variable processing time
    }
    
    addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        messageDiv.id = generateMessageId();
        
        // Sanitize and format message content
        const sanitizedText = sanitizeInput(text);
        const formattedText = this.formatLinks(sanitizedText);
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${formattedText}</p>
            </div>
            <div class="message-time">${formatTimestamp()}</div>
        `;
        
        this.messagesContainer.appendChild(messageDiv);
        
        // Save to chat history
        chatHistory.addMessage({
            id: messageDiv.id,
            text: text,
            isUser: isUser,
            time: formatTimestamp()
        });
        
        // Scroll to bottom
        this.scrollToBottom();
    }
    
    formatLinks(text) {
        // Convert URLs to clickable links
        return text.replace(/https?:\/\/[^\s]+/g, url => {
            try {
                const domain = new URL(url).hostname;
                return `<a href="${url}" target="_blank" rel="noopener noreferrer">${domain}</a>`;
            } catch (e) {
                return url;
            }
        });
    }
    
    showTypingIndicator() {
        this.typingIndicator.classList.add('active');
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        this.typingIndicator.classList.remove('active');
    }
    
    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 10);
    }
    
    handleClearChat() {
        if (confirm('Are you sure you want to clear the chat history? This cannot be undone.')) {
            this.messagesContainer.innerHTML = '';
            chatHistory.clear();
            
            // Add welcome message back
            this.addMessage("Chat history cleared. How can I help you today?", false);
        }
    }
    
    showModal() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    hideModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    hideLoadingState() {
        // Remove any loading indicators if present
        const loadingMessages = document.querySelectorAll('.message.loading');
        loadingMessages.forEach(msg => msg.remove());
    }
}

// Initialize chat engine when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.chatEngine = new ChatEngine();
    
    // Show network status
    console.log('NeuralChat initialized successfully!');
    console.log('✅ All systems operational - ready for conversation');
    
    // Focus input field
    document.getElementById('user-input').focus();
});
