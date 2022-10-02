let id = null;
const elem = document.getElementsByClassName("stripes_group");
let pos = 0;
clearInterval(id);
id = setInterval(frame, 100);
function frame() {
  if (pos == 30) {
    pos = 0;
  }
  pos++;
  elem[0].style.transform = `translateY(${pos + "px"})`;
}
