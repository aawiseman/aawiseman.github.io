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
            r_text = [...r_text_backup];
        } else {
            return;
        }
    }

    const randomIndex = Math.floor(Math.random() * r_text.length);
    const pickedText = r_text.splice(randomIndex, 1)[0];
    
    console.log(`Joke #${randomIndex}: ${pickedText}`);
    
    const fullJoke = "Tim Tebow " + pickedText;
    outputElement.innerHTML = fullJoke;

    // Toggle the long-text class based on character count
    if (fullJoke.length >= 65) {
        outputElement.classList.add('long-text');
    } else {
        outputElement.classList.remove('long-text');
    }
}

window.onload = function() {
    loadJokes();
};