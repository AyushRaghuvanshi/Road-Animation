const walls = [
  {
    height: 240,
    width: 16,
    top: 320,
    left: 70,
  },

  {
    height: 16,
    width: 544,
    top: 324,
    left: 70,
  },
  {
    height: 16,
    width: 224,
    top: 388,
    left: 134,
  },
  {
    height: 16,
    width: 208,
    top: 388,
    left: 406,
  },
  {
    height: 112,
    width: 16,
    top: 390,
    left: 134,
  },
  {
    height: 112,
    width: 16,
    top: 390,
    left: 342,
  },
  {
    height: 16,
    width: 224,
    top: 484,
    left: 134,
  },
  {
    height: 16,
    width: 208,
    top: 484,
    left: 406,
  },
  {
    height: 112,
    width: 16,
    top: 390,
    left: 406,
  },
  {
    height: 112,
    width: 16,
    top: 390,
    left: 598,
  },
  {
    height: 16,
    width: 954,
    top: 548,
    left: 70,
  },
  {
    height: 304,
    width: 16,
    top: 198,
    left: 660,
  },
  {
    height: 340,
    width: 16,
    top: -16,
    left: 596,
  },
  {
    height: 170,
    width: 16,
    top: -16,
    left: 660,
  },
  {
    height: 16,
    width: 424,
    top: 484,
    left: 662,
  },
  {
    height: 16,
    width: 664,
    top: 134,
    left: 662,
  },
  {
    height: 16,
    width: 600,
    top: 198,
    left: 662,
  },
  {
    height: 336,
    width: 16,
    top: 198,
    left: 1248,
  },
  {
    height: 458,
    width: 16,
    top: 134,
    left: 1312,
  },
  {
    height: 64,
    width: 16,
    top: 580,
    left: 1072,
  },
  {
    height: 80,
    width: 16,
    top: 564,
    left: 1008,
  },
  {
    height: 48,
    width: 16,
    top: 484,
    left: 1072,
  },
  {
    height: 16,
    width: 176,
    top: 516,
    left: 1072,
  },
  {
    height: 16,
    width: 256,
    top: 580,
    left: 1072,
  },
  {
    height: 16,
    width: 80,
    top: 630,
    left: 1010,
  },
  {
    height: 16,
    width: 80,
    top: -16,
    left: 596,
  },
];

let coins = [
  {
    name: "1",
    height: 20,
    width: 20,
    top: 450,
    left: 115,
  },
  {
    name: "2",
    height: 20,
    width: 20,
    top: 300,
    left: 1275,
  },
];
const walls_group = document.getElementsByClassName("walls");

for (let i = 0; i < walls.length; i++) {
  const node = document.createElement("div");
  console.log(walls[i].top + "px");
  node.style.top = walls[i].top + "px";
  node.style.height = walls[i].height + "px";
  node.style.width = walls[i].width + "px";
  node.style.left = walls[i].left + "px";
  node.style.position = "absolute";
  // node.style.backgroundColor = "black";

  walls_group[0].appendChild(node);
}
const coins_group = document.getElementsByClassName("coins");

for (let i = 0; i < coins.length; i++) {
  const node = document.createElement("div");
  node.classList.add(`${i + 1}`);
  console.log(coins[i].top + "px");
  node.style.top = coins[i].top + "px";
  node.style.height = coins[i].height + "px";
  node.style.width = coins[i].width + "px";
  node.style.left = coins[i].left + "px";
  node.style.position = "absolute";
  node.style.backgroundColor = "black";

  coins_group[0].appendChild(node);
}
const car_h = 30;
const car_w = 13.75;
const car_d = Math.sqrt(car_h * car_h + car_w * car_w);
function getPixelsByAngle(x, y, width, height, angle) {
  var radians = (angle * Math.PI) / 180;
  return [
    //upper left
    [
      x +
        width / 2 +
        (width / -2) * Math.cos(radians) -
        (height / -2) * Math.sin(radians),
      y +
        height / 2 +
        (width / -2) * Math.sin(radians) +
        (height / -2) * Math.cos(radians),
    ],
    //upper right
    [
      x +
        width / 2 +
        (width / 2) * Math.cos(radians) -
        (height / -2) * Math.sin(radians),
      y +
        height / 2 +
        (width / 2) * Math.sin(radians) +
        (height / -2) * Math.cos(radians),
    ],
    //bottom right
    [
      x +
        width / 2 +
        (width / 2) * Math.cos(radians) -
        (height / 2) * Math.sin(radians),
      y +
        height / 2 +
        (width / 2) * Math.sin(radians) +
        (height / 2) * Math.cos(radians),
    ],
    //bottom left
    [
      x +
        width / 2 +
        (width / -2) * Math.cos(radians) -
        (height / 2) * Math.sin(radians),
      y +
        height / 2 +
        (width / -2) * Math.sin(radians) +
        (height / 2) * Math.cos(radians),
    ],
  ];
}

function checkAllCollsion(x, y, a) {
  for (let i = 0; i < walls.length; i++) {
    if (checkColision(x, y, a, i)) {
      return false;
    }
  }
  return true;
}
function checkCoinsCollsion(x, y, a) {
  for (let i = 0; i < coins.length; i++) {
    let whichprop = checkCoinColision(x, y, a, i);
    console.log(whichprop);
    if (whichprop === "1") {
      coins.shift();
      return "1";
    }
    if (whichprop === "2") {
      coins.pop();
      return "2";
    }
  }
  return "3";
}
function checkCoinColision(x, y, a, i) {
  let car_c = getPixelsByAngle(x, y, car_w, car_h, a);
  let coin_C = getPixelsByAngle(
    coins[i].left,
    coins[i].top,
    coins[i].width,
    coins[i].height,
    0
  );
  let car_c2 = getPixelsByAngle(x, y, car_w, car_h, 0);
  let coin_C2 = getPixelsByAngle(
    coins[i].left,
    coins[i].top,
    coins[i].width,
    coins[i].height,
    a
  );
  let car_p_onX = [
    Math.min(car_c[0][0], car_c[2][0], car_c[3][0], car_c[3][0]),
    Math.max(car_c[0][0], car_c[2][0], car_c[3][0], car_c[3][0]),
  ];
  let car_p_onY = [
    Math.min(car_c[0][1], car_c[2][1], car_c[3][1], car_c[3][1]),
    Math.max(car_c[0][1], car_c[2][1], car_c[3][1], car_c[3][1]),
  ];
  let coin_p_onX = [
    Math.min(coin_C[0][0], coin_C[2][0], coin_C[3][0], coin_C[3][0]),
    Math.max(coin_C[0][0], coin_C[2][0], coin_C[3][0], coin_C[3][0]),
  ];
  let coin_p_onY = [
    Math.min(coin_C[0][1], coin_C[2][1], coin_C[3][1], coin_C[3][1]),
    Math.max(coin_C[0][1], coin_C[2][1], coin_C[3][1], coin_C[3][1]),
  ];
  let car_p_onX2 = [
    Math.min(car_c2[0][0], car_c2[2][0], car_c2[3][0], car_c2[3][0]),
    Math.max(car_c2[0][0], car_c2[2][0], car_c2[3][0], car_c2[3][0]),
  ];
  let car_p_onY2 = [
    Math.min(car_c2[0][1], car_c2[2][1], car_c2[3][1], car_c2[3][1]),
    Math.max(car_c2[0][1], car_c2[2][1], car_c2[3][1], car_c2[3][1]),
  ];
  let coin_p_onX2 = [
    Math.min(coin_C2[0][0], coin_C2[2][0], coin_C2[3][0], coin_C2[3][0]),
    Math.max(coin_C2[0][0], coin_C2[2][0], coin_C2[3][0], coin_C2[3][0]),
  ];
  let coin_p_onY2 = [
    Math.min(coin_C2[0][1], coin_C2[2][1], coin_C2[3][1], coin_C2[3][1]),
    Math.max(coin_C2[0][1], coin_C2[2][1], coin_C2[3][1], coin_C2[3][1]),
  ];

  if (car_p_onX[0] < coin_p_onX[0] && car_p_onX[1] < coin_p_onX[0]) {
    return false;
  }
  if (car_p_onX[0] > coin_p_onX[1] && car_p_onX[1] > coin_p_onX[1]) {
    return false;
  }

  if (car_p_onY[0] < coin_p_onY[0] && car_p_onY[1] < coin_p_onY[0]) {
    return false;
  }
  if (car_p_onY[0] > coin_p_onY[1] && car_p_onY[1] > coin_p_onY[1]) {
    return false;
  }

  if (car_p_onX2[0] < coin_p_onX2[0] && car_p_onX2[1] < coin_p_onX2[0]) {
    return false;
  }
  if (car_p_onX2[0] > coin_p_onX2[1] && car_p_onX2[1] > coin_p_onX2[1]) {
    return false;
  }

  if (car_p_onY2[0] < coin_p_onY2[0] && car_p_onY2[1] < coin_p_onY2[0]) {
    return false;
  }
  if (car_p_onY2[0] > coin_p_onY2[1] && car_p_onY2[1] > coin_p_onY2[1]) {
    return false;
  }
  return coins[i].name;
}

function checkColision(x, y, a, i) {
  let car_c = getPixelsByAngle(x, y, car_w, car_h, a);
  let wall_C = getPixelsByAngle(
    walls[i].left,
    walls[i].top,
    walls[i].width,
    walls[i].height,
    0
  );
  let car_c2 = getPixelsByAngle(x, y, car_w, car_h, 0);
  let wall_C2 = getPixelsByAngle(
    walls[i].left,
    walls[i].top,
    walls[i].width,
    walls[i].height,
    a
  );
  let car_p_onX = [
    Math.min(car_c[0][0], car_c[2][0], car_c[3][0], car_c[3][0]),
    Math.max(car_c[0][0], car_c[2][0], car_c[3][0], car_c[3][0]),
  ];
  let car_p_onY = [
    Math.min(car_c[0][1], car_c[2][1], car_c[3][1], car_c[3][1]),
    Math.max(car_c[0][1], car_c[2][1], car_c[3][1], car_c[3][1]),
  ];
  let wall_p_onX = [
    Math.min(wall_C[0][0], wall_C[2][0], wall_C[3][0], wall_C[3][0]),
    Math.max(wall_C[0][0], wall_C[2][0], wall_C[3][0], wall_C[3][0]),
  ];
  let wall_p_onY = [
    Math.min(wall_C[0][1], wall_C[2][1], wall_C[3][1], wall_C[3][1]),
    Math.max(wall_C[0][1], wall_C[2][1], wall_C[3][1], wall_C[3][1]),
  ];
  let car_p_onX2 = [
    Math.min(car_c2[0][0], car_c2[2][0], car_c2[3][0], car_c2[3][0]),
    Math.max(car_c2[0][0], car_c2[2][0], car_c2[3][0], car_c2[3][0]),
  ];
  let car_p_onY2 = [
    Math.min(car_c2[0][1], car_c2[2][1], car_c2[3][1], car_c2[3][1]),
    Math.max(car_c2[0][1], car_c2[2][1], car_c2[3][1], car_c2[3][1]),
  ];
  let wall_p_onX2 = [
    Math.min(wall_C2[0][0], wall_C2[2][0], wall_C2[3][0], wall_C2[3][0]),
    Math.max(wall_C2[0][0], wall_C2[2][0], wall_C2[3][0], wall_C2[3][0]),
  ];
  let wall_p_onY2 = [
    Math.min(wall_C2[0][1], wall_C2[2][1], wall_C2[3][1], wall_C2[3][1]),
    Math.max(wall_C2[0][1], wall_C2[2][1], wall_C2[3][1], wall_C2[3][1]),
  ];

  if (car_p_onX[0] < wall_p_onX[0] && car_p_onX[1] < wall_p_onX[0]) {
    return false;
  }
  if (car_p_onX[0] > wall_p_onX[1] && car_p_onX[1] > wall_p_onX[1]) {
    return false;
  }

  if (car_p_onY[0] < wall_p_onY[0] && car_p_onY[1] < wall_p_onY[0]) {
    return false;
  }
  if (car_p_onY[0] > wall_p_onY[1] && car_p_onY[1] > wall_p_onY[1]) {
    return false;
  }

  if (car_p_onX2[0] < wall_p_onX2[0] && car_p_onX2[1] < wall_p_onX2[0]) {
    return false;
  }
  if (car_p_onX2[0] > wall_p_onX2[1] && car_p_onX2[1] > wall_p_onX2[1]) {
    return false;
  }

  if (car_p_onY2[0] < wall_p_onY2[0] && car_p_onY2[1] < wall_p_onY2[0]) {
    return false;
  }
  if (car_p_onY2[0] > wall_p_onY2[1] && car_p_onY2[1] > wall_p_onY2[1]) {
    return false;
  }
  return true;
}
