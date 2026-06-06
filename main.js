const r_text_backup = [
    "is coaching at some high school somewhere",
    "is playing in the CFL, probably",
    "is trying to get all his stats to 99 on Madden",
    "is coaching at Air Force or Navy or some school that runs the option all the time",
    "is playing Tecmo Bowl in his mom's basement",
    "is drunk (on life)",
    "is high (on life)",
    "will return when we are ready for him, like Quetzalcoatl",
    "is in Smashing Pumpkins now",
    "is doing yoga on his Wii Fit",
    "is trying to find Carmen Sandiego",
    "is caulking his wagon to ford the river",
    "died of gangrene",
    "is in the Arena League. Is that where Shreveport plays?",
    "is giving motivational speeches, probably",
    "is trying to launch his own athletic apparel brand, Under Tebow",
    "is trying to convince people that Jars of Clay really is a good band",
    "is photoshopping every NFL jersey onto himself",
    "is Googling \"does NFL Europe still exist\"",
    "is Googling \"list of Arena League teams\"",
    "is Googling \"what other countries play football not soccer\"",
    "is Googling \"do any former NFL players play professional soccer\"",
    "is Googling \"sports similar to football\"",
    "is Googling \"rules to Australian football\"",
    "is Googling \"is Gaelic football like regular football\"",
    "is Googling \"do they run the Wildcat in rugby\"",
    "is Googling \"Timmy Football\"",
    "is trying out potential ESPN catchphrases. \"Pow!\" \"Zap!\"",
    "is writing his autobiography with Mitch Albom. it is heartwarming or treacly depending on how discerning/jaded you are",
    "is trying to pitch a football version of Mighty Ducks",
    "is hanging out with Vertical Horizon",
    "is watching Kirk Cameron movies",
    "is hanging out with Kirk Cameron",
    "is Kirk Cameron. Have you seen them in the same place at the same time?",
    "is opening Tim Tebow's Steakhouse",
    "is opening a Mexican restaurant in Gainesville: Timmy T's Taco Town",
    "is trying to buy a Planet Hollywood franchise",
    "is. He just is.",
    "is reading all the Tom Clancy books",
    "is trying to get through all the Twilight books",
    "is a nice young man",
    "is a real high motor guy",
    "is a real character guy",
    "is asleep on Johnny Manziel's couch",
    "is doing open mics at coffee shops in Florida",
    "is focusing on his music",
    "is the Lieutenant Governor of Florida",
    "is running for deputy mayor of Gainesville",
    "is putting together a PAC to run for Florida state senate",
    "is a Florida state senator",
    "is finishing his PhD in geology",
    "is finishing his PhD in theater",
    "is finishing his PhD in art history",
    "is finishing his PhD in Tagalog",
    "is finishing his PhD in leisure studies",
    "is still hiding from John Elway",
    "is an ESPN college football commentator",
    "is updating his Geocities page",
    "is updating his LinkedIn",
    "died of dysentery",
    "is Tebowing, obviously",
    "is a real gym rat",
    "joined the circus",
    "drives an Uber in Jersey",
    "is working out for the Eagles",
    "got signed by the Eagles, for some reason",
    "is still sad about getting dumped by Miss Universe",
    "is trying to reinvent himself as a knuckleball pitcher",
    "thinks he could play tight end somewhere",
    "has returned to the land of his birth, the Philippines",
    "is a baseball player now",
    "hosts some kind of construction reality show on Fox",
    "is in the Mets' farm system",
    "is having long phone conversations with Skip Bayless",
    "posts on Twitter A LOT",
    "made a movie called Run the Race. No, seriously",
    "has weird shoulders",
    "is speaking at giant Christian gatherings",
    "has the Tim Tebow Foundation, of course",
    "posts religious stuff on Twitter all the time",
    "is really into TikTok",
    "is poopin'",
    "is self-quarantining",
    "is social distancing, we hope",
    "is washing his hands thoroughly",
    "is retired",
    "got vaccinated",
    "is quarantining",
    "is socially distancing",
    "retired from baseball. Up next: lacrosse",
    "retired from baseball. Up next: handball",
    "retired from baseball. Up next: caber toss",
    "retired from baseball. Up next: professional billards",
    "retired from baseball. Up next: pro bowling",
    "retired from baseball. Up next: golf?",
    "retired from baseball. Up next: archery",
    "retired from baseball. Up next: probably some dumb TV gig",
    "retired from baseball. Up next: field hockey",
    "retired from baseball. Up next: the XFL",
    "retired from baseball. Up next: that three person basketball league",
    "retired from baseball. Up next: darts",
    "retired from baseball. Up next: eSports",
    "retired from baseball. Up next: rugby",
    "retired from baseball. Up next: Major League Soccer?",
    "just signed with the Jaguars?",
    "is a tight end now apparently",
    "is the new Broncos coach",    
    "received the 2008 Quaqua Protégé Award as outstanding home-education graduate",
    "is on a show with Stephen A. Smith",
    "has a non-profit that fights sex trafficking",
    "owns a minor league hockey team in Lake Tahoe",
    "owns a minor league hockey team in Augusta, Georgia",
    "co-wrote a book about something",
    "is the original Jaxson Dart",
    "runs the Tim Tebow Foundation",
    "got really into Labubus",
    "got really into Lorde",
    "got really into White Lotus",
    "got really into Survivor",
    "has moved to Panama",
    "got married to Miss Universe",
    "invested in a soccer team in Jacksonville",
    "put the ram in the rama lama ding dong"
];

let r_text = [...r_text_backup];
let hasInteracted = false;

// 1. This waits for the page to fully load
window.onload = function() {
    const faceLink = document.getElementById('faceLink');
    const hint = document.getElementById('floatingHint');
    
    displayJoke(true);

    if (faceLink && hint) {
        faceLink.addEventListener('mousemove', function(e) {
            if (!hasInteracted) {
                hint.style.setProperty('display', 'block', 'important');
                
                // 1. Get the precise, stable bounding box of the face container
                const rect = faceLink.getBoundingClientRect();
                
                // 2. Math calculation: Page viewport coordinate minus the container's top-left edge
                // This creates a perfect, unshakeable local coordinate system
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                
                // 3. Apply position
                hint.style.left = (mouseX + 10) + 'px';
                hint.style.top = (mouseY + 10) + 'px';
            }
        });

        faceLink.addEventListener('mouseout', function() {
            hint.style.setProperty('display', 'none', 'important');
        });
    }
};

// 3. This is what runs when a user clicks the face in your HTML
function changeText() {
    displayJoke(false);
}

// 4. Combined logic function to cleanly handle picking jokes
function displayJoke(isInitialLoad) {
    if (!isInitialLoad) {
        hasInteracted = true;
        const hint = document.getElementById('floatingHint');
        if (hint) hint.style.display = 'none';
    }

    const outputElement = document.getElementById('boldStuff');
    if (!outputElement) return;

    if (r_text.length === 0) {
        outputElement.innerHTML = "... sorry, you've learned all there is to know about Tim Tebow!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * r_text.length);
    const pickedText = r_text.splice(randomIndex, 1)[0];
    
    outputElement.innerHTML = pickedText;
}