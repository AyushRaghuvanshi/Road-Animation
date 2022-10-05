let coins_collected = 0;
const ui = document.getElementsByClassName("ui");
ui[0].children[0].innerHTML = `Cash Collected :$${coins_collected}/$2000`;
function coinCollected() {
  coins_collected++;
  ui[0].children[0].innerHTML = `Cash Collected :$${coins_collected}000/$2000`;
  if (coins_collected == 2) {
    ui[0].children[0].style.color = "green";
    nextMission();
  }
}

function nextMission() {
  const nMission = document.createElement("p");
  nMission.innerHTML = "Go to the North Exit";
  ui[0].appendChild(nMission);
  coins.push({
    name: "end",
    top: 0,
    height: 16,
    width: 80,
    left: 596,
  });
}

function gameend() {
  window.location.assign("passed.html");
}
