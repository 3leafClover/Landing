document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded!");

    const borders = document.getElementById("borders");
    borders.style.width = "0px";
    borders.style.height = "0px";

    const loading = document.getElementById("loading");
    const background = document.getElementById("background");
    const loadingText = document.getElementById("loadingtext");
    const sob = document.getElementById("sob");
    const musicname = document.getElementById("musicname");
    const logo = document.getElementById("logo");
    const cloverTit = document.getElementById("cloverTit");
    const titleTriangle = document.getElementById("title-triangle");
    const project = document.getElementById("project");
    const tip = document.getElementById("right");

    setTimeout(() => {
        loading.style.animationName = "loading1";
        loading.style.animationFillMode = "forwards";
        loading.style.animationDuration = "1s";
    }, 2000);

    window.addEventListener("load", () => {
        borders.style.animationName = "borders";
        borders.style.animationFillMode = "forwards";
        borders.style.animationDuration = "1s";
        // Start the border animation after the page is loaded
        setTimeout(() => {
            loadingText.textContent = 'Loaded';
        }, 650);
    });

    borders.addEventListener("click", () => {
        const music = document.getElementById("music");
        const music1 = document.getElementById("music1");
        music.play();
        music1.play();
        startSummoning();

        setTimeout(() => {
            musicname.style.animationName = "fadein";
            musicname.style.animationFillMode = "forwards";
            musicname.style.animationDuration = "10s";
            background.style.opacity="100%";
            setInterval(changeText, 21000);
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
            tip.style.animationName = '';
            tip.style.animationName = 'rightappear';
            tip.style.animationFillMode = 'forwards';
            tip.style.animationDuration = '5s';
        }, 18000);

        setTimeout(() => {
            cloverTit.style.animationName = "fadein";
            cloverTit.style.animationFillMode = "forwards";
            cloverTit.style.animationDuration = "1s";
        }, 20000);

        setTimeout(() => {
            // Reset the animation
            titleTriangle.style.animationName = '';
            void titleTriangle.offsetWidth; // Trigger reflow
            titleTriangle.style.animationName = 'title-triangle';
            titleTriangle.style.animationFillMode = 'forwards';
            titleTriangle.style.animationDuration = '21s';

            const triangleRight = document.querySelector('.triangle-right');
        
            // Reset the animation
            triangleRight.style.animationName = '';
            void triangleRight.offsetWidth; // Trigger reflow
            triangleRight.style.animationName = 'trisplit';
            triangleRight.style.animationFillMode = 'forwards';
            triangleRight.style.animationDuration = '21s';

            const tritit = document.getElementById("tritit")
    
            // Reset the animation
            tritit.style.animationName = '';
            tritit.style.animationName = 'trititexpand';
            tritit.style.animationFillMode = 'forwards';
            tritit.style.animationDuration = '21s';

            project.style.animationName = '';
            project.style.animationName = 'descappear';
            project.style.animationFillMode = 'forwards';
            project.style.animationDuration = '21s';
        }, 14000);

        
        
        
    });
});

const summonDiamond = () => {
    const diamond = document.createElement('div');
    diamond.classList.add('diamond');

    const size = Math.floor(Math.random() * (100 - 20) + 20);
    diamond.style.width = size + 'px';
    diamond.style.height = size + 'px';

    const left = Math.floor(Math.random() * 101);
    diamond.style.left = left + '%';

    const opacity = Math.floor(Math.random() * 101);
    diamond.style.opacity = opacity + '%';

    const blur = Math.floor(Math.random() * 5);
    diamond.style.filter = `blur(${blur}px)`;

    const fadeDuration = Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000;
    diamond.style.animation = `fadeout ${fadeDuration}ms forwards`;

    const levitateDuration = Math.floor(Math.random() * (80000 - 30000 + 1)) + 30000;
    diamond.style.animation += `, levitate ${levitateDuration}ms`;

    const sob = document.getElementById("sob");
    sob.appendChild(diamond);

    setTimeout(() => {
        diamond.remove();
    }, fadeDuration + levitateDuration);
};

let intervalId;

const startSummoning = () => {
    let isFirstTwoSeconds = true;

    intervalId = setInterval(() => {
        summonDiamond();

        if (isFirstTwoSeconds) {
            setTimeout(() => {
                clearInterval(intervalId);
                intervalId = setInterval(summonDiamond, 200);
            }, 2000);
            isFirstTwoSeconds = false;
        }
    }, 15);
};


const tritit = document.getElementById("tritit");
const trititLink = document.getElementById("tritit-link");
const project = document.getElementById("project");

const trititTexts = [
    { text: "Puzzle Probe", link: "https://puzzleprobe.netlify.app/" },
    { text: "Phigros Profile", link: "https://silv.netlify.app/" },
    { text: "Note.OS", link: "https://noteos.netlify.app/" }
];

const projectTexts = ["It is a challenging website made for those with sharp thinking skills that want to test their abilities. As more puzzles are solved, more features and story pieces are unlocked. It's Unfinished", "Silb has commissioned the recreation of the profile layout from the game Phigros on this website. Several modifications have been made, incorporating specific information provided by the commissioner.", "Utilizing Local Storage, this website ensures secure storage of notes on your device. With customizable themes and an integrated music player, it fosters creativity and functionality."];

let trititIndex = 0;
let projectIndex = 0;

const changeText = () => {
    tritit.textContent = trititTexts[trititIndex].text;
    trititLink.href = trititTexts[trititIndex].link;
    project.textContent = projectTexts[projectIndex];

    trititIndex = (trititIndex + 1) % trititTexts.length;
    projectIndex = (projectIndex + 1) % projectTexts.length;
};

// Change text immediately and then every 16 seconds
changeText();
