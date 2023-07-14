let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
const sr=ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'left'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});

// // const audio = new Audio();
// // audio.src="sec1/08. Slugfest 5.mp3";

// pausebutton.addEventListener("click" , function() {
//     if (audioPlayer.paused) {
//         audioPlayer.play();
//         pausebutton.textContent = "MUTE";
//     } else {
//         audioPlayer.pause();
//         pausebutton.textContent = "UNMUTE";
//     }
// });

function playRandomMusic() {
    var musicList = [
      "charactermusic/Shelly_start_01.ogg",
      "charactermusic/Shelly_start_02.ogg",
      "charactermusic/Shelly_start_03.ogg",
      "charactermusic/Shelly_start_04.ogg",
      "charactermusic/Shelly_die_01.ogg",
      "charactermusic/Shelly_die_02.ogg",
      "charactermusic/Shelly_die_03.ogg",
      "charactermusic/Shelly_die_04.ogg",
      "charactermusic/Shelly_hurt_01.ogg",
      "charactermusic/Shelly_hurt_02.ogg",
      "charactermusic/Shelly_hurt_03.ogg",
      "charactermusic/Shelly_hurt_04.ogg",
      "charactermusic/Shelly_hurt_05.ogg",
      "charactermusic/Shelly_kill_01.ogg",
      "charactermusic/Shelly_kill_02.ogg",
      "charactermusic/Shelly_kill_03.ogg",
      "charactermusic/Shelly_kill_04.ogg",
      "charactermusic/Shelly_kill_05.ogg",
      // Add more music file names to the array
    ];

    var randomIndex = Math.floor(Math.random() * musicList.length);
    var musicFile = musicList[randomIndex];

    var audio = new Audio(musicFile);
    audio.play();
}

var toggleButton = document.getElementById('toggleButton');
var audioM = document.getElementById('audioPlayer');

// Initialize the playing state
var isPlaying = false;

toggleButton.addEventListener('click', function() {
    if (isPlaying) {
        // Pause the music and update the button text
        audioM.pause();
        toggleButton.innerText = 'PLAY';
    } else {
        if (toggleButton.innerText="PLAY"){
            audioM.play();
            toggleButton.innerText = 'PAUSE';
        }
        // audioM.play();
        // toggleButton.innerText = 'Pause';
    }
    isPlaying = !isPlaying;
});

function openContact(){
    window.location.href="contact.html";
}
function openBrawlers(){
    window.location.href="brawlers.html";
}
function openAbout(){
    window.location.href="about.html";
}
function openHome(){
    window.location.href="index.html";
}

var audioPlayer = document.getElementById("sec2player");
var section2 = document.getElementById("section1");
var pausebutton=document.getElementById("pausesec2");
// Set up the Intersection Observer
var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5 
};

var observer = new IntersectionObserver(handleIntersect, options);
var logo=document.getElementsByClassName("logo");
// Callback function for intersection changes
function handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.target.id === "section1") {
            if (entry.isIntersecting) {
                audioPlayer.play();
                audioM.pause();
                logo.style.opacity=0;
                
            }
            else {
                audioPlayer.pause();
                // audioM.play();
                toggleButton.textContent="PLAY";
                pausebutton.textContent="MUTE";
            }
        }
    });
}
observer.observe(section2);

pausebutton.addEventListener("click" , function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        pausebutton.textContent = "MUTE";
    } else {
        audioPlayer.pause();
        pausebutton.textContent = "UNMUTE";
    }
});

var gems=document.getElementById("gems");
var showcontent=document.getElementById("showcontent");
var bp=document.getElementById("bpdisp");
showcontent.addEventListener("click",function(){
    if(bp.style.opacity==0){
        bp.style.opacity=1;
        setTimeout(function(){
            gems.style.opacity=1;
        },500);
        showcontent.textContent="HIDE"
    }
    else{
        gems.style.opacity=0;
        setTimeout(function(){
            bp.style.opacity=0;
        },500);
        showcontent.textContent="SHOW"
    }
});

sr.reveal('.bpimg',{delay:500, origin:'left'});

var show2=document.getElementById("show2");
var txt2=document.getElementsById("txt2");
show2.addEventListener("click",function(){
    if(txt2.style.opacity==0){
        txt2.style.opacity=1;
        show2.textContent="HIDE";
    }
    else{
        txt2.style.opacity=0;
        show2.textContent="SHOW";
    }
});

// brawlers page
