// javaScript code


// Get the quote and author elements
const quotes = [
    {
        quote: "Success isn’t about how much money you make; it’s about the difference you make in people’s lives and the legacy left.",
        author: "Nelson Mandela"
    },
    {
        quote: "Happiness doesn’t come from having everything but appreciating what you already have and making the best of every single moment in life.",
        author: "Walt Disney"
    },    
    {
        quote: "Great things never come from comfort zones; growth begins when you push past your fears and embrace challenges with determination.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "In the middle of every difficulty lies opportunity; never lose hope, for even storms bring rainbows in their aftermath",
        author: "John Lennon"
    },
    {
        quote: "Hard times create strong people, strong people create good times, good times create weak people, and weak people create hard times.",
        author: "Maya Angelou"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },
    {
        quote: "A journey of a thousand miles begins with a single step; take that step and keep moving forward without hesitation.",
        author: "John D. Rockefeller"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles Swindoll"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
];

// Get the quote and author elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = randomQuote.author;
}

// Generate a random quote when the page loads
generateRandomQuote();

// Add event listener to the button
document.getElementById('btn-qoutes-generate').addEventListener('click', generateRandomQuote);

// implement login every 1 mint to change the quote
setInterval(generateRandomQuote, 60000); // 60000 milliseconds = 1 minute
