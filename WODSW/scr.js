document.addEventListener("DOMContentLoaded", function() {
    // Set current date and time
    const dateElement = document.getElementById("date");
    
    // Function to update date and time
    function updateDateTime() {
        const today = new Date();
        const options = { 
            weekday: 'long',
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        dateElement.textContent = today.toLocaleDateString('en-US', options);
        
        // Update word and quote based on the current day
        const dayIndex = (today.getDate() - 1) % 30;
        const wordData = words[dayIndex];
        const quoteData = quotes[dayIndex];

        // Set Word of the Day
        document.getElementById("word").textContent = wordData.word;
        document.getElementById("meaning").textContent = wordData.meaning;
        document.getElementById("example").textContent = wordData.example;

        // Set Motivational Quote
        document.getElementById("quote").textContent = quoteData;
    }

    // Word of the Day Data for 30 Days
    const words = [
        { word: "Eloquent", meaning: "Fluent or persuasive in speaking or writing.", example: "She gave an eloquent speech at the conference." },
        { word: "Resilient", meaning: "Able to recover quickly from difficulties.", example: "He remained resilient despite the setbacks." },
        { word: "Serendipity", meaning: "Finding something good without looking for it.", example: "Our meeting was pure serendipity." },
        { word: "Tenacious", meaning: "Holding tightly onto something or persistently determined.", example: "Her tenacious spirit led her to success." },
        { word: "Ubiquitous", meaning: "Present, appearing, or found everywhere.", example: "Smartphones have become ubiquitous in modern society." },
        { word: "Meticulous", meaning: "Showing great attention to detail; very careful and precise.", example: "She was meticulous in completing her project." },
        { word: "Altruistic", meaning: "Showing a selfless concern for the well-being of others.", example: "His altruistic actions helped many in need." },
        { word: "Ephemeral", meaning: "Lasting for a very short time.", example: "The beauty of cherry blossoms is ephemeral." },
        { word: "Perseverance", meaning: "Persistence in doing something despite difficulty.", example: "His perseverance in studying paid off with excellent grades." },
        { word: "Eloquent", meaning: "Fluent or persuasive in speaking or writing.", example: "The professor's eloquent explanation made the complex topic clear." },
        { word: "Pragmatic", meaning: "Dealing with things sensibly and realistically.", example: "We need a pragmatic approach to solve this problem." },
        { word: "Ambiguous", meaning: "Open to more than one interpretation.", example: "The contract contained several ambiguous clauses." },
        { word: "Benevolent", meaning: "Kind and generous.", example: "The benevolent donor gave millions to charity." },
        { word: "Candid", meaning: "Truthful and straightforward.", example: "She was candid about her feelings on the matter." },
        { word: "Diligent", meaning: "Having or showing care and conscientiousness.", example: "The diligent student always completed her homework on time." },
        { word: "Eloquent", meaning: "Fluent or persuasive in speaking or writing.", example: "His eloquent speech moved the entire audience." },
        { word: "Fastidious", meaning: "Very attentive to and concerned about accuracy and detail.", example: "She was fastidious about keeping her house clean." },
        { word: "Gregarious", meaning: "Fond of company; sociable.", example: "His gregarious nature made him popular at parties." },
        { word: "Harbinger", meaning: "A person or thing that announces or signals the approach of another.", example: "The first robin is a harbinger of spring." },
        { word: "Ineffable", meaning: "Too great or extreme to be expressed or described in words.", example: "The beauty of the sunset was ineffable." },
        { word: "Juxtapose", meaning: "Place or deal with close together for contrasting effect.", example: "The artist juxtaposed light and dark colors in her painting." },
        { word: "Kaleidoscope", meaning: "A constantly changing pattern or sequence of elements.", example: "The city's culture is a kaleidoscope of different traditions." },
        { word: "Luminous", meaning: "Full of or shedding light; bright or shining.", example: "The luminous moon lit up the night sky." },
        { word: "Mellifluous", meaning: "Sweet or musical; pleasant to hear.", example: "Her mellifluous voice captivated the audience." },
        { word: "Nebulous", meaning: "Unclear, vague, or ill-defined.", example: "The company's future plans were somewhat nebulous." },
        { word: "Oblivion", meaning: "The state of being unaware or unconscious of what is happening.", example: "The old traditions faded into oblivion." },
        { word: "Panacea", meaning: "A solution or remedy for all difficulties or diseases.", example: "There is no panacea for the world's problems." },
        { word: "Quixotic", meaning: "Exceedingly idealistic; unrealistic and impractical.", example: "His quixotic plan to end world hunger was admirable but unrealistic." },
        { word: "Resplendent", meaning: "Attractive and impressive through being richly colorful or sumptuous.", example: "The bride looked resplendent in her wedding dress." },
        { word: "Sycophant", meaning: "A person who acts obsequiously toward someone important to gain advantage.", example: "The politician was surrounded by sycophants." }
    ];

    // Motivational Quotes Data for 30 Days
    const quotes = [
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Do what you can, with what you have, where you are.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Don't watch the clock; do what it does. Keep going.",
        "Act as if what you do makes a difference. It does.",
        "The best way to predict the future is to create it.",
        "Your time is limited, don't waste it living someone else's life.",
        "The only way to do great work is to love what you do.",
        "Innovation distinguishes between a leader and a follower.",
        "Stay hungry, stay foolish.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "It does not matter how slowly you go as long as you do not stop.",
        "Everything you've ever wanted is on the other side of fear.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Success is walking from failure to failure with no loss of enthusiasm.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Dream big and dare to fail.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "The only person you are destined to become is the person you decide to be.",
        "Believe you can and you're halfway there.",
        "It's not whether you get knocked down, it's whether you get up.",
        "The best revenge is massive success.",
        "Life is 10% what happens to you and 90% how you react to it.",
        "The only way to do great work is to love what you do.",
        "Don't be afraid to give up the good to go for the great.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "The road to success and the road to failure are almost exactly the same.",
        "Success usually comes to those who are too busy to be looking for it.",
        "The only place where success comes before work is in the dictionary."
    ];

    // Update time immediately and then every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
}); 