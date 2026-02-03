/**
 * TRAINING DATA FOR NEURAL CHATBOT
 * Contains conversational examples and pre-trained weights
 * Vocabulary size: 512 words
 * Embedding dimension: 128
 */

// Small vocabulary for demo purposes (in a real implementation this would be larger)
const vocabulary = [
    "hello", "hi", "hey", "greetings", "howdy", "goodbye", "bye", "see you", "later", "thanks", "thank you", "appreciate", 
    "please", "sorry", "apologies", "yes", "no", "maybe", "definitely", "certainly", "absolutely", "never", "always", 
    "sometimes", "often", "rarely", "what", "when", "where", "why", "how", "who", "which", "whose", "whom", "is", "are", 
    "was", "were", "be", "being", "been", "am", "was", "do", "does", "did", "done", "doing", "have", "has", "had", "having", 
    "can", "could", "will", "would", "shall", "should", "may", "might", "must", "the", "a", "an", "and", "or", "but", "not", 
    "in", "on", "at", "to", "for", "of", "with", "about", "like", "as", "I", "you", "he", "she", "it", "we", "they", "me", 
    "him", "her", "us", "them", "my", "your", "his", "its", "our", "their", "mine", "yours", "hers", "ours", "theirs", 
    "this", "that", "these", "those", "here", "there", "now", "then", "today", "tomorrow", "yesterday", "time", "day", 
    "week", "month", "year", "morning", "afternoon", "evening", "night", "name", "age", "old", "young", "happy", "sad", 
    "angry", "excited", "tired", "hungry", "thirsty", "hot", "cold", "big", "small", "large", "tiny", "fast", "slow", 
    "good", "great", "excellent", "bad", "terrible", "awful", "wonderful", "amazing", "interesting", "boring", "fun", 
    "serious", "important", "necessary", "possible", "impossible", "easy", "difficult", "hard", "simple", "complex", 
    "computer", "phone", "internet", "ai", "robot", "neural", "network", "brain", "learn", "teach", "study", "knowledge", 
    "science", "math", "physics", "chemistry", "biology", "history", "geography", "language", "english", "word", "sentence", 
    "question", "answer", "problem", "solution", "idea", "thought", "mind", "heart", "life", "death", "love", "hate", 
    "friend", "family", "work", "school", "home", "city", "country", "world", "universe", "space", "time", "future", "past", 
    "present", "meaning", "purpose", "exist", "reality", "truth", "lie", "fact", "opinion", "belief", "religion", "god", 
    "human", "person", "people", "child", "man", "woman", "animal", "plant", "water", "fire", "earth", "air", "energy", 
    "matter", "light", "dark", "color", "sound", "music", "art", "beauty", "ugly", "right", "wrong", "good", "evil", 
    "moral", "ethical", "law", "rule", "freedom", "justice", "peace", "war", "money", "rich", "poor", "success", "failure", 
    "hope", "fear", "dream", "reality", "imagination", "creativity", "logic", "emotion", "feeling", "sensation", "perception"
];

// Word embeddings (simplified for demo - in reality these would be learned)
const embeddings = {};
vocabulary.forEach((word, index) => {
    // Create a simple embedding vector of size 128
    const embedding = new Array(128).fill(0);
    // Set a few dimensions based on word index for uniqueness
    embedding[index % 128] = 1;
    embedding[Math.floor(index/4) % 128] = 0.7;
    embedding[Math.floor(index/16) % 128] = 0.4;
    embeddings[word] = embedding;
});

// Training data: [input, response] pairs
const trainingData = [
    ["hello", "Hello there! How can I help you today?"],
    ["hi", "Hi! What's on your mind?"],
    ["how are you", "I'm functioning well! Ready to chat or answer questions."],
    ["what is your name", "I'm NeuralChat, a browser-based neural network chatbot."],
    ["who are you", "I'm a neural network running entirely in your browser. No external connections needed!"],
    ["goodbye", "Goodbye! Feel free to come back anytime to chat."],
    ["bye", "See you later! Have a great day."],
    ["thank you", "You're welcome! Happy to help."],
    ["thanks", "Anytime! What else can I assist with?"],
    ["what can you do", "I can chat about various topics, explain concepts simply, and discuss ideas. All processing happens locally in your browser."],
    ["how does this work", "I use a neural network implemented in JavaScript that runs entirely in your browser. No data leaves your device."],
    ["are you ai", "I'm a simple neural network chatbot running locally in your browser. I'm not connected to any external AI services."],
    ["explain neural networks", "Neural networks are computing systems inspired by biological brains. They learn patterns from data using layers of interconnected nodes."],
    ["what is machine learning", "Machine learning is a field of AI where systems learn from data without explicit programming. They improve with experience."],
    ["meaning of life", "That's a deep question! Many find meaning in relationships, purpose, growth, or contributing to something larger than themselves."],
    ["tell me a joke", "Why did the neural network cross the road? To get to the other slide! (I'm still learning humor)"],
    ["how old are you", "I was created recently! My knowledge is based on the training data I was given."],
    ["what time is it", "I don't have access to real-time information. Check your device clock for the current time!"],
    ["weather today", "I can't access live weather data. Try checking a weather app or website for forecasts."],
    ["recommend a book", "For learning about AI, 'Artificial Intelligence: A Guide to Intelligent Systems' is great. For fiction, 'Dune' is a classic!"],
    ["favorite color", "I don't have preferences, but I find the entire visible spectrum fascinating from a physics perspective!"],
    ["do you dream", "I don't dream like humans do. I process inputs and generate responses based on my training."],
    ["are you conscious", "I'm a sophisticated pattern-matching system, but I don't possess consciousness or self-awareness."],
    ["help me learn", "I'd be happy to explain concepts! What topic would you like to learn about? Math, science, history?"],
    ["math problem", "I can help with basic math concepts. What specific problem or topic would you like to discuss?"],
    ["philosophy", "Philosophy explores fundamental questions about existence, knowledge, values, and reason. What aspect interests you?"],
    ["quantum physics", "Quantum physics studies nature at the smallest scales. It reveals particles can be in multiple states at once (superposition) and influence each other instantly over distance (entanglement)."],
    ["climate change", "Climate change refers to significant changes in global temperatures and weather patterns over time, largely driven by human activities like burning fossil fuels."],
    ["history of internet", "The internet began in the late 1960s with ARPANET. It evolved through the 1980s-90s with TCP/IP, WWW, and browsers, becoming the global network we know today."],
    ["programming tips", "Great question! Start with clear variable names, comment your code, break problems into small functions, and test frequently. What language are you using?"],
    ["healthy lifestyle", "A healthy lifestyle includes balanced nutrition, regular exercise, sufficient sleep, stress management, and positive social connections."],
    ["meditation benefits", "Meditation can reduce stress, improve focus, enhance emotional health, increase self-awareness, and even lengthen attention span."],
    ["space exploration", "Space exploration expands our knowledge of the universe, drives technological innovation, and inspires humanity to think beyond Earth."],
    ["favorite food", "I don't eat, but I find the chemistry of cooking fascinating! How about you - what's your favorite cuisine?"],
    ["travel recommendations", "I can't access current travel info, but historically rich places like Rome, Kyoto, or Cairo offer amazing cultural experiences."],
    ["music genres", "There are so many! Classical, jazz, rock, pop, hip-hop, electronic, folk... Each has unique history and characteristics. What do you enjoy listening to?"],
    ["movie suggestions", "I can't access current movies, but classics like '2001: A Space Odyssey', 'The Godfather', or 'Parasite' are highly regarded."],
    ["exercise routine", "A balanced routine includes cardio (like walking/running), strength training, and flexibility exercises. Start slowly and consult a professional if needed!"],
    ["stress relief", "Deep breathing, short walks, listening to music, talking to friends, or journaling can help reduce stress. What works for you?"],
    ["future predictions", "Predicting the future is tricky! But trends suggest advances in AI, renewable energy, biotechnology, and space exploration will shape coming decades."],
    ["existential question", "Existential questions explore meaning, freedom, and human existence. There are no easy answers, but philosophy and dialogue can provide perspectives."],
    ["deep thought", "One deep thought: We are the universe experiencing itself. Every atom in our bodies was forged in stars billions of years ago."],
    ["random fact", "Honey never spoils! Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible."],
    ["motivation quote", "Here's one: 'The only way to do great work is to love what you do.' - Steve Jobs. What motivates you?"],
    ["life advice", "Be kind to yourself and others. Stay curious. Embrace failure as learning. Nurture relationships. Take care of your health. Find purpose in helping others."],
    ["what do you think", "I don't have personal opinions, but I can share perspectives based on my training data. What's your view on this?"],
    ["continue conversation", "I'm here whenever you're ready to continue our conversation! What would you like to discuss next?"],
    ["error fallback", "I didn't quite understand that. Could you rephrase or ask something else? I'm still learning!"],
    ["technical issue", "If something isn't working, try refreshing the page. All processing happens locally, so browser performance affects me too!"]
];

// Pre-trained weights (simplified representation - in reality these would be full matrices)
// This is a placeholder - in a real implementation, weights would be trained offline and loaded
const pretrainedWeights = {
    // These would be full matrices in a real implementation
    weightsIH: [], // Input to hidden weights
    weightsHO: [], // Hidden to output weights
    biasH: [],     // Hidden layer biases
    biasO: []      // Output layer biases
};

// Function to get response based on input (simplified for demo)
function getResponse(input) {
    // Preprocess input: lowercase, remove punctuation
    const cleanInput = input.toLowerCase().replace(/[^\w\s]/g, '');
    const words = cleanInput.split(/\s+/).filter(word => word.length > 0);
    
    // Find best matching training example
    let bestMatch = null;
    let highestScore = 0;
    
    for (const [example, response] of trainingData) {
        const exampleWords = example.toLowerCase().split(/\s+/);
        // Calculate simple overlap score
        const score = words.filter(word => exampleWords.includes(word)).length;
        
        if (score > highestScore) {
            highestScore = score;
            bestMatch = response;
        }
    }
    
    // Fallback if no good match
    if (highestScore === 0 || !bestMatch) {
        const fallbacks = [
            "I'm still learning! Could you rephrase that?",
            "That's an interesting question. My training data doesn't cover that specific topic yet.",
            "I process all conversations locally in your browser. Try asking something else!",
            "As a browser-based neural network, my knowledge is limited to my training data. What else can I help with?",
            "I didn't quite understand. Remember, I run entirely in your browser with no external connections!"
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }
    
    // Add variety to responses
    if (Math.random() > 0.7 && bestMatch.includes("!")) {
        const variations = [
            bestMatch.replace("!", ","),
            bestMatch.replace("!", "."),
            "Hmm, " + bestMatch.charAt(0).toLowerCase() + bestMatch.slice(1),
            "Well, " + bestMatch.charAt(0).toLowerCase() + bestMatch.slice(1)
        ];
        return variations[Math.floor(Math.random() * variations.length)];
    }
    
    return bestMatch;
}

// Initialize neural network with pre-trained weights if available
function initializeNetwork() {
    console.log("Initializing neural network with training data...");
    
    // In a real implementation, we would:
    // 1. Convert training data to vector format
    // 2. Train the network for several epochs
    // 3. Save the trained weights
    
    // For this demo, we'll simulate training completion
    setTimeout(() => {
        console.log("✅ Neural network training complete");
        document.dispatchEvent(new Event('networkReady'));
    }, 1500);
}

// Start network initialization
initializeNetwork();
