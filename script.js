document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded!");

    var borders = document.getElementById("borders");
    borders.style.width = "0px";
    borders.style.height = "0px";

    var loading = document.getElementById("loading");
    var loadingText = document.getElementById("loadingtext");

    var sob = document.getElementById("sob");

    var musicname=document.getElementById("musicname");

    var logo=document.getElementById("logo");

    var cloverTit=document.getElementById("cloverTit");

    var titleTriangle = document.getElementById("title-triangle");

    setTimeout(() => {
        loading.style.animationName = "loading1";
        loading.style.animationFillMode = "forwards";
        loading.style.animationDuration = "1s";
    }, 2000);

    setTimeout(() => {
        borders.style.animationName = "borders";
        borders.style.animationFillMode = "forwards";
        borders.style.animationDuration = "1s";

        setTimeout(() => {
            loadingText.textContent = 'Loaded';
        }, 650);
    }, 2000); // Change the time here, or keep it consistent with the loading animation

    borders.addEventListener("click", () => {
        var music = document.getElementById("music");
        var music1 = document.getElementById("music1");
        music.play();
        music1.play();
        startSummoning();

        setTimeout(() => {
            musicname.style.animationName = "fadein";
            musicname.style.animationFillMode = "forwards";
            musicname.style.animationDuration = "10s";
        }, 2000);

        borders.style.animationName = "borderclose";
        borders.style.animationFillMode = "forwards";
        borders.style.animationDuration = "8s";
        sob.style.animationName = "unblur";
        sob.style.animationFillMode = "forwards";
        sob.style.animationDuration = "27s";
        loadingText.style.animationName = "fadeout";
        loadingText.style.color = "rgb(0, 255, 0)";
        loadingText.style.animationFillMode = "forwards";
        loadingText.style.animationDuration = "4s";

        setTimeout(() => {
            logo.style.animationName = "logo";
            logo.style.animationFillMode = "forwards";
            logo.style.animationDuration = "8s";
        }, 11000);

        setTimeout(() => {
            cloverTit.style.animationName = "fadein";
            cloverTit.style.animationFillMode = "forwards";
            cloverTit.style.animationDuration = "1s";
        }, 20000);

        setTimeout(() => {
            titleTriangle.style.animationName = "title-triangle";
            titleTriangle.style.animationFillMode = "forwards";
            titleTriangle.style.animationDuration = "16s";
        }, 23000); 
    });
});

function summonDiamond() {
    // Create a new diamond element
    const diamond = document.createElement('div');
    diamond.classList.add('diamond');

    // Generate random size between 20px and 300px for width and height
    const size = Math.floor(Math.random() * (100 - 20));
    diamond.style.width = size + 'px';
    diamond.style.height = size + 'px';

    // Generate random left position between 0% and 100%
    const left = Math.floor(Math.random() * 101);
    diamond.style.left = left + '%';

    // Generate random opacity between 0% and 100%
    const opacity = Math.floor(Math.random() * 101);
    diamond.style.opacity = opacity + '%';

    // Generate random blur effect between 0px and 10px
    const blur = Math.floor(Math.random() * 5);
    diamond.style.filter = `blur(${blur}px)`;

    // Apply fade-out animation with random duration between 10s and 30s
    const fadeDuration = Math.floor(Math.random() * (120000 - 60000 + 1)) + 10000;
    diamond.style.animation = `fadeout ${fadeDuration}ms forwards`;

    // Apply levitation animation with random duration between 30s and 80s
    const levitateDuration = Math.floor(Math.random() * (130000 - 30000 + 1)) + 30000;
    diamond.style.animation += `, levitate ${levitateDuration}ms`;

    // Append diamond element to the document body
    document.body.appendChild(diamond);

        // Append diamond element to the "sob" div container
        sob.appendChild(diamond);

    // Remove diamond element after animation completes
    setTimeout(() => {
        diamond.remove();
    }, fadeDuration + levitateDuration);
}

// Call summonDiamond function to summon a diamond

let intervalId; // Define a variable to hold the interval ID

function startSummoning() {
    let isFirstTwoSeconds = true; // Flag to track the first two seconds

    intervalId = setInterval(() => {
        summonDiamond(); // Call summonDiamond function to spawn a diamond

        // Check if it's the first two seconds
        if (isFirstTwoSeconds) {
            // Set a faster spawning interval for the first two seconds
            setTimeout(() => {
                clearInterval(intervalId); // Clear the interval
                intervalId = setInterval(summonDiamond, 500); // Reset interval to normal pace
            }, 2000);
            isFirstTwoSeconds = false; // Update the flag
        }
    }, 15); // Initially spawn diamonds every 100 milliseconds
}
