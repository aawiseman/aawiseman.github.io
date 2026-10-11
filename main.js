let r_text_backup = [];
let r_text = [];

// Fetch jokes from external JSON file on page load
async function loadJokes() {
    try {
        // Adding ?v= + timestamp forces the browser to fetch the new JSON file every time
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
    const nameElement = document.getElementById('tebowName');
    if (!outputElement) return;

    if (r_text.length === 0) {
        if (r_text_backup.length > 0) {
            r_text = [...r_text_backup]; // Cycle through again when list empties
        } else {
            return;
        }
    }

    const randomIndex = Math.floor(Math.random() * r_text.length);
    const pickedText = r_text.splice(randomIndex, 1)[0];
    
    if (pickedText.length >= 54) {
        outputElement.style.fontSize = "80%";
        if (nameElement) nameElement.style.fontSize = "80%";
    } else {
        outputElement.style.fontSize = "100%";
        if (nameElement) nameElement.style.fontSize = "100%";
    }

    outputElement.innerHTML = pickedText;
}

window.onload = function() {
    loadJokes();
};