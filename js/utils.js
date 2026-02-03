/**
 * UTILITY FUNCTIONS
 * Helper functions for the chat interface and neural network
 */

// Format timestamp for messages
function formatTimestamp(date = new Date()) {
    return date.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
    });
}

// Generate unique message ID
function generateMessageId() {
    return 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

// Sanitize user input to prevent XSS
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML
        .replace(/javascript:/gi, '')
        .replace(/on\w+=/gi, '')
        .replace(/<script/gi, '&lt;script')
        .replace(/<\/script/gi, '&lt;/script');
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast';
    toast.classList.add('show');
    
    if (type === 'success') toast.classList.add('success');
    if (type === 'error') toast.classList.add('error');
    
    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Message copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        showToast('Failed to copy message', 'error');
    });
}

// Voice recognition handler
class VoiceHandler {
    constructor() {
        this.isRecording = false;
        this.recognition = null;
        this.initRecognition();
    }
    
    initRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                document.getElementById('user-input').value = transcript;
                this.stopRecording();
                // Auto-send if setting is enabled
                if (localStorage.getItem('autoSendVoice') === 'true') {
                    document.getElementById('send-button').click();
                }
            };
            
            this.recognition.onend = () => {
                this.stopRecording();
            };
        }
    }
    
    startRecording() {
        if (!this.recognition) {
            showToast('Voice input not supported in this browser', 'error');
            return;
        }
        
        this.isRecording = true;
        document.getElementById('voice-toggle').classList.add('recording');
        try {
            this.recognition.start();
        } catch (err) {
            console.error('Voice recognition error:', err);
            this.stopRecording();
            showToast('Voice input error. Please try again.', 'error');
        }
    }
    
    stopRecording() {
        if (this.recognition) {
            this.recognition.stop();
        }
        this.isRecording = false;
        document.getElementById('voice-toggle').classList.remove('recording');
    }
    
    toggleRecording() {
        if (this.isRecording) {
            this.stopRecording();
        } else {
            this.startRecording();
        }
    }
}

// Theme manager
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.initTheme();
    }
    
    initTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        showToast(`Switched to ${this.currentTheme} mode`, 'info');
    }
}

// Chat history manager
class ChatHistory {
    constructor() {
        this.history = JSON.parse(localStorage.getItem('chatHistory')) || [];
    }
    
    addMessage(message) {
        this.history.push(message);
        this.save();
    }
    
    clear() {
        this.history = [];
        this.save();
        showToast('Chat history cleared', 'info');
    }
    
    save() {
        localStorage.setItem('chatHistory', JSON.stringify(this.history));
    }
    
    load() {
        return this.history;
    }
    
    export() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.history, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `neuralchat-history-${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        showToast('Chat history exported!', 'success');
    }
}

// Initialize utilities
const voiceHandler = new VoiceHandler();
const themeManager = new ThemeManager();
const chatHistory = new ChatHistory();

// Auto-resize textarea
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
    // Cap maximum height
    if (textarea.scrollHeight > 150) {
        textarea.style.overflowY = 'auto';
    } else {
        textarea.style.overflowY = 'hidden';
    }
}

// Initialize auto-resize on input
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    userInput.addEventListener('input', () => autoResize(userInput));
    
    // Load chat history on startup
    const savedHistory = chatHistory.load();
    const messagesContainer = document.getElementById('chat-messages');
    
    if (savedHistory.length > 0) {
        // Clear default messages
        messagesContainer.innerHTML = '';
        
        // Load saved messages
        savedHistory.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${msg.isUser ? 'user-message' : 'bot-message'}`;
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${sanitizeInput(msg.text)}</p>
                </div>
                <div class="message-time">${msg.time}</div>
            `;
            messagesContainer.appendChild(messageDiv);
        });
        
        // Scroll to bottom
        setTimeout(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 100);
    }
});
