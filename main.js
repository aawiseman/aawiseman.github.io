let r_text_backup = [];
let r_text = [];

// Fetch jokes from external JSON file on page load
async function loadJokes() {
    try {
        const response = await fetch('jokes.json?v=' + new Date().getTime());
        r_text_backup = await response.json();
        r_text = [...r_text_backup];
        
        changeText();
    } catch (error) {
        console.error("Failed to load jokes:", error);
    }
}

function changeText() {
    const outputElement = document.getElementById('boldStuff');
    if (!outputElement) return;

    if (r_text.length === 0) {
        if (r_text_backup.length > 0) {
            r_text = [...r_text_backup]; // Refill deck when empty
        } else {
            return;
        }
    }

    const randomIndex = Math.floor(Math.random() * r_text.length);
    const pickedText = r_text.splice(randomIndex, 1)[0];
    
    // Find the joke's actual position in the full backup array (1-based for readability)
    const originalIndex = r_text_backup.indexOf(pickedText) + 1;
    
    // Log the true joke number
    console.log(`Joke #${originalIndex}: ${pickedText}`);
    
    const fullJoke = "Tim Tebow " + pickedText;
    outputElement.innerHTML = fullJoke;

    // Toggle mobile scaling class
    if (fullJoke.length >= 65) {
        outputElement.classList.add('long-text');
    } else {
        outputElement.classList.remove('long-text');
    }
}

window.onload = function() {
    loadJokes();
};