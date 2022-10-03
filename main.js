let id = null;
var elem = document.getElementsByClassName("car");
let Y = 0;
let X = 0;
let velocity = 1;
let rotate = 0;
let up = false,
  end = true,
  right = false,
  left = false;
elem[0].style.top = Y + "px";
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
    up = true;
  }
  if (event.key === "ArrowDown") {
    down = true;
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
    up = false;
  }
  if (event.key === "ArrowDown") {
    down = false;
  }
});

function frame() {
  if (!end) {
    clearInterval(id);
  } else {
    console;
    elem[0].style.transform = `translate(${X}px,${Y}px) rotateZ(${-rotate}deg)`;
    if (up) {
      console.log(X, Y);
      X -= velocity * Math.sin((3.14 / 180) * rotate);
      Y -= velocity * Math.cos((3.14 / 180) * rotate);
    }
    if (down) {
      X += velocity * Math.sin((3.14 / 180) * rotate);
      Y += velocity * Math.cos((3.14 / 180) * rotate);
    }
    if (right && (up || down)) {
      rotate--;
    }
    if (left && (up || down)) {
      rotate++;
    }
  }
}
