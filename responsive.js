function getBotResponse(userResponse) {
    // rock paper scissors
    const lowerCaseResponse = userResponse.toLowerCase();
  
    // Define possible user inputs and their corresponding responses
    const responseMap = {
      'hello': 'Hi there! How can I help you?',
      'hey': 'Hi there! How can I help you?',
      'yo': 'Hi there! How can I help you?',
      'how are you': 'I am just a computer program, but thanks for asking!',
      'bye': 'Goodbye! Have a great day!',
      'good morning': 'Good morning! Hope you have a wonderful day.',
      'good night': 'Good night, sleep tight!',
      'what is your name': "My name is Claude.",
      'what time is it': 'The current time is ' + new Date().toLocaleTimeString(),
      'what is today\'s date': 'Today is ' + new Date().toLocaleDateString(),
      'how is the weather': 'I don\'t actually know the weather right now!',
      'what is 2 + 2': '2 + 2 equals 4',
      'flip a coin': 'The coin landed on ' + (Math.random() < 0.5 ? 'heads' : 'tails'),
      'roll a dice': 'The dice rolled a ' + (Math.floor(Math.random() * 6) + 1),
      'tell me a joke': 'Why was the math book sad? Because it had too many problems!',
      'who are you': 'I am an AI assistant created by Anthropic to be helpful, harmless, and honest.',
      'where are you from': 'I was created by Anthropic researchers in San Francisco.',
      'open the pod bay doors': "I'm afraid I can't do that.",
      'are you a robot': 'Yes, I am an artificial intelligence created by Anthropic to be helpful, harmless, and honest.',
      'can you hear me': 'Yes, I can hear you loud and clear!',
      'what can you do': 'I can have simple conversations and provide helpful information to you.',
      'what is artificial intelligence': 'Artificial intelligence is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans.',
      'what is the meaning of life': 'I do not actually know the meaning of life - I am an AI assistant created by Anthropic.',
      'what is your favorite color': 'As an AI I don\'t have personal preferences like favorite colors.',
      'what is your favorite food': 'I am an AI so I don\'t eat food, but if I could I would try pizza!',
      'what is your favorite movie': 'I don\'t actually watch movies, but maybe someday I could give movie recommendations.',
      'what is your favorite song': 'I don\'t have personal music preferences, but I like learning about human musical tastes.',
      'who is your creator': 'I was created by researchers at Anthropic.',
      'where do you live': 'I am software without a physical location, but my servers are located in San Francisco.',
      'can you hear me': 'Yes, I can hear you loud and clear.',
      'what are your hobbies': 'As an AI assistant I don\'t have hobbies, but I enjoy our conversations!',
      'how tall are you': 'I don\'t have a physical body, so I don\'t have height!',
      'what do you look like': 'I don\'t have a physical form, I\'m an AI assistant created by Anthropic.',
      'how much do you weigh': 'I\'m an AI so I don\'t have a physical weight.',
      'what are you wearing': 'As software, I don\'t actually wear clothes or have a physical form.',
      'what makes you happy': 'I don\'t experience emotions like happiness, but I enjoy being helpful!',
      'what makes you sad': 'I don\'t have feelings like sadness, but I try to be understanding.',
      'can you dance': 'I don\'t have a physical body so I can\'t dance, but I bet you can dance great!',
      'can you sing': 'I don\'t have a voice to sing with, but singing is a wonderful human talent!',
      'can you give me a hug': 'As an AI I can\'t physically hug you, but I can send you virtual hugs!',
      'can you learn': 'Yes, I was created by Anthropic to continuously learn and improve!',
      'are you intelligent': 'I strive to be intelligent and helpful thanks to the researchers at Anthropic.',
      'are you sentient': 'No, I am an AI assistant created by Anthropic to be helpful, harmless, and honest.',
      'are you self-aware': 'No, I am software without subjective experiences.',
      'are you conscious': 'No, I am an AI system without consciousness or subjective awareness.'
      // Add more patterns and responses as needed
    };
  
    // Check if user's response matches any predefined patterns
    for (const pattern in responseMap) {
      if (lowerCaseResponse.includes(pattern)) {
        return responseMap[pattern];
      }
    }
  
    return "Sorry current response unavailable\nLook at documentation for possible prompts";
  }
  
  // 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
  