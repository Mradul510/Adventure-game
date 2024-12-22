const specialDate = "Nov 28, 2024"; // Your meaningful date

function playSong() {
    const audio = document.getElementById("favoriteSong");
    audio.play();
}

function choose(choice) {
    const story = document.getElementById("story");
    if (choice === "forest") {
        story.innerText = `You enter the forest and hear a strange voice say, "Why don’t programmers like nature? Too many bugs!" 
        Nearby, you find a magical tree with a carving that says, "${specialDate}: The day we first met." 
        Do you take a closer look or continue your journey?`;
    } else if (choice === "castle") {
        story.innerText = `You arrive at the castle, and the guard says, "Password?" Then adds, "Just kidding, the Wi-Fi is down anyway." 
        Inside, you hear your favorite song playing in the background.`;
        playSong();
    }
}
