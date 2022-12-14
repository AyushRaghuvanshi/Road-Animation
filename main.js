let id = null;
var elem = document.getElementsByClassName("car");
let Y = 580;
let X = 1048;
var drive = new Audio("./assets/drive.mp3");
var cash = new Audio("./assets/cash.mp3");
drive.loop = true;
let velocity = 1;
let rotate = 0;
let up = false,
  end = true,
  right = false,
  left = false;
elem[0].style.transform = `translate(${X}px,${Y}px) rotateZ(${-rotate}deg)`;
let down = false;
id = setInterval(frame, 5);
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    left = true;
  }
  if (event.key === "ArrowRight") {
    right = true;
  }
  if (event.key === "ArrowUp") {
    drive.play();
    up = true;
  }
  if (event.key === "ArrowDown") {
    drive.play();
    down = true;
  }
  if (event.key === "q") {
    coins_collected = 1;
    coinCollected();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowLeft") {
    // rotate = 0;
    left = false;
  }
  if (event.key === "ArrowRight") {
    // rotate = 0;
    right = false;
  }
  if (event.key === "ArrowUp") {
    drive.pause();
    up = false;
  }
  if (event.key === "ArrowDown") {
    drive.pause();
    down = false;
  }
});

function frame() {
  if (!end) {
    clearInterval(id);
  } else {
    let vx = velocity * Math.sin((3.14 / 180) * rotate);
    let vy = velocity * Math.cos((3.14 / 180) * rotate);
    let ifprop = checkCoinsCollsion(X, Y, -rotate);
    if (checkAllCollsion(X, Y, -rotate) == false) {
      window.location.assign("gameover.html");
      clearInterval(id);
    }
    if (ifprop !== "3") {
      const prop = document.getElementsByClassName(ifprop);

      if (ifprop === "end") {
        gameend();
      }
      prop[0].remove();
      cash.play();
      coinCollected();
    }
    elem[0].style.transform = `translate(${X}px,${Y}px) rotateZ(${-rotate}deg)`;
    if (up) {
      X -= vx;
      Y -= vy;
    }
    if (down) {
      if (checkAllCollsion(X + vx, Y + vy, -rotate)) {
        X += vx;
        Y += vy;
      }
    }
    if (
      right &&
      (up || down) &&
      checkAllCollsion(X + vx, Y + vy, -rotate) &&
      checkAllCollsion(X - vx, Y - vy, -rotate)
    ) {
      rotate--;
    }
    if (
      left &&
      (up || down) &&
      checkAllCollsion(X + vx, Y + vy, -rotate) &&
      checkAllCollsion(X - vx, Y - vy, -rotate)
    ) {
      rotate++;
    }
    if (rotate == 360 || rotate == -360) {
      rotate = 0;
    }
  }
}
