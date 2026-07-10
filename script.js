// =====================================
// MPLS ROCKET 2026
// SCRIPT.JS FINAL
// SD NEGERI 1 BANYUURIP
// =====================================



// ===============================
// ELEMENT
// ===============================


const launchButton = document.getElementById("launchButton");

const openingScreen = document.getElementById("openingScreen");

const countdown = document.getElementById("countdown");

const rocket = document.getElementById("rocket");

const flame = document.getElementById("flame");

const smoke = document.getElementById("smoke");

const ignition = document.getElementById("ignition");

const liftoff = document.getElementById("liftoff");

const flash = document.getElementById("flash");

const videoScreen = document.getElementById("videoScreen");

const launchVideo = document.getElementById("launchVideo");

const closingScreen = document.getElementById("closingScreen");

const finishButton = document.getElementById("finishButton");




// AUDIO


const openingMusic = document.getElementById("openingMusic");

const sirenSound = document.getElementById("sirenSound");

const countdownSound = document.getElementById("countdownSound");

const rocketSound = document.getElementById("rocketSound");







// ===============================
// SAAT HALAMAN DIBUKA
// ===============================


window.onload = ()=>{


    // musik opening

    if(openingMusic){

        openingMusic.volume = 0.5;

        openingMusic.play()
        .catch(()=>{});

    }


};









// ===============================
// TOMBOL LAUNCH
// ===============================


launchButton.addEventListener("click",()=>{


    // sembunyikan opening

    openingScreen.style.display="none";


    // bunyi sirene

    if(sirenSound){

        sirenSound.play();

    }



    setTimeout(()=>{


        startCountdown();


    },2000);



});









// ===============================
// COUNTDOWN 10 - 1
// ===============================


function startCountdown(){


let angka = 10;


countdown.style.display="block";


countdown.innerHTML=angka;



let timer=setInterval(()=>{


    angka--;


    countdown.innerHTML=angka;



    if(countdownSound){

        countdownSound.currentTime=0;

        countdownSound.play();

    }




    if(angka<=0){


        clearInterval(timer);


        countdown.style.display="none";


        startIgnition();


    }



},1000);



}









// ===============================
// IGNITION
// ===============================


function startIgnition(){



ignition.style.display="block";


rocket.classList.add("shake");



flame.style.display="block";



if(rocketSound){

    rocketSound.play();

}




setTimeout(()=>{


    ignition.style.display="none";


    startLiftoff();



},3000);



}









// ===============================
// LIFTOFF
// ===============================


function startLiftoff(){


liftoff.style.display="block";


rocket.classList.remove("shake");


rocket.classList.add("launch");



smoke.style.display="block";




setTimeout(()=>{


    flashEffect();



},3000);



}










// ===============================
// FLASH
// ===============================


function flashEffect(){


flash.style.display="block";



setTimeout(()=>{


flash.style.display="none";



startVideo();



},800);



}









// ===============================
// VIDEO LAUNCH
// ===============================


function startVideo(){



rocket.style.display="none";



videoScreen.style.display="block";



if(launchVideo){


launchVideo.currentTime=0;


launchVideo.play();



}



}









// ===============================
// VIDEO SELESAI
// ===============================


if(launchVideo){


launchVideo.addEventListener("ended",()=>{


showClosing();



});


}









// ===============================
// CLOSING
// ===============================


function showClosing(){


videoScreen.style.display="none";


closingScreen.style.display="flex";



}









// ===============================
// SELESAI
// ===============================


if(finishButton){


finishButton.addEventListener("click",()=>{


location.reload();


});


}