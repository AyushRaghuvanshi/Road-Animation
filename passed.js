let body = document.getElementsByTagName("body");
let fadein;
let passed_audio = new Audio("./assets/passed.mp3");
passed_audio.play();
let fadeout, fadein2;
let opa = 0;
setTimeout(() => {
  fadein = setInterval(fadeinf, 10);
}, 500);
console.log(body);
function fadeinf() {
  if (opa >= 1) {
    clearInterval(fadein);
    fadeout = setInterval(fadeoutf, 10);
  }
  body[0].style.opacity = opa += 0.1;
}

function fadeoutf() {
  console.log("here");
  if (opa <= 0) {
    clearInterval(fadeout);
    const img = document.createElement("img");
    img.src = "./assets/passed.png";
    body[0].appendChild(img);
    setTimeout(wasted, 1000);
  }
  body[0].style.opacity = opa -= 0.1;
}

function wasted() {
  fadein2 = setInterval(fadein2f, 10);
}
function fadein2f() {
  if (opa >= 1) {
    clearInterval(fadein2);
    setTimeout(() => {
      window.location.assign("index.html");
    }, 1000);
  }
  body[0].style.opacity = opa += 0.01;
}
