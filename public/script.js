var socit = io();
var room,
  colour,
  old,
  count,
  cursor,
  imijiz,
  naym,
  sub,
  ges,
  a = 0;
var put = document.querySelectorAll("td");
while (a < put.length) {
  if (!put[a].className.includes("noGray"))
    put[a].innerHTML =
      '<img class="butin" src="' +
      'https://www.freeiconspng.com/uploads/glossy-button-black-icon-10.png"' +
      ">";
  a++;
}
var ol = document.getElementsByTagName("*");
a = 0;
while (a < ol.length) {
  if (ol[a].className !== "ceep") ol[a].style.visibility = "hidden";
  a++;
}
var guesser,
  maker = true;
socit.on("connect", function () {
  // console.log("Chaynd");
});

socit.on("ges", (guess) => {
  console.log(guess);
});

function createRoom() {
  room = document.querySelector("input").value;
  naym = document.querySelector("#naym").value;
  socit.emit("createRoom", room);
  socit.emit("newPlayer", naym);
  choozMode();
}

function choozMode() {
  var hydz = document.querySelectorAll(".hyd");
  a = 0;
  while (a < hydz.length) {
    hydz[a].style.visibility = "";
    a++;
  }
}
function play() {
  var radz = document.querySelectorAll(".rad");
  if (radz[0].checked) guesser = false;
  else guesser = true;
  mode();
  var rim = document.querySelectorAll("input");
  var rim2 = document.querySelectorAll("button");
  var rim3 = document.querySelectorAll("p");
  a = 0;
  while (a < rim.length) {
    rim[a].remove();
    if (rim2[a] != null) rim2[a].remove();
    if (rim3[a] != null) rim3[a].remove();
    a++;
  }
  a = 0;
  var ol = document.getElementsByTagName("*");
  while (a < ol.length) {
    if (ol[a].className !== "cept") ol[a].style.visibility = "";
    else console.log("ceptCept");
    a++;
  }
}
function init() {
  cursor = {};
  count = 1 - 1;
  cursor["black"] = "https://i.ibb.co/vQ7Y3qn/blac.png";
  cursor["blue"] = "https://i.ibb.co/MgWxBLg/blue.png";
  cursor["gray"] = "https://i.ibb.co/sWn0D77/gray.png";
  cursor["green"] = "https://i.ibb.co/6bPPKdJ/green.png";
  cursor["orange"] = "https://i.ibb.co/zxVNVz0/orinj.png";
  cursor["pink"] = "https://i.ibb.co/840Gzj7/pingc.png";
  cursor["purple"] = "https://i.ibb.co/Tr63hSD/purple.png";
  cursor["red"] = "https://i.ibb.co/n3Y4cV1/red.png";
  cursor["redPin"] = "https://i.ibb.co/DQX2XFf/redPin.png";
  cursor["wytPin"] = "https://i.ibb.co/VVnQBPX/wytPin.png";
  imijiz = {};
  imijiz["black"] = "https://i.ibb.co/9372X2b/blac.png";
  imijiz["blue"] = "https://i.ibb.co/5vp1V3S/blue.png";
  imijiz["gray"] = "https://i.ibb.co/vLk8szF/gray.png";
  imijiz["green"] = "https://i.ibb.co/QYxm7Jb/green.png";
  imijiz["orange"] = "https://i.ibb.co/d62Cm05/orinj.png";
  imijiz["pink"] = "https://i.ibb.co/tbqP8qP/pingc.png";
  imijiz["purple"] = "https://i.ibb.co/Jn62B7v/purple.png";
  imijiz["red"] = "https://i.ibb.co/QHt1CDv/red.png";
  imijiz["redPin"] = "https://i.imgur.com/nBsXJBa.png";
  imijiz["wytPin"] =
    "https://www.iconspng.com/uploads/glossy-circle/glossy-circle.png";
}

init();

function clict() {
  var wich = this.id.toString();
  var thisWun = document.getElementById(wich);
  var cul = thisWun.getAttribute("data-colour");
  if (thisWun.className === "noBorder") {
    thisWun.firstElementChild.style.border = "2px solid black";
    thisWun.firstElementChild.style.borderRadius = "50%";
  }
  if (
    (parseInt(this.id) > 9 && parseInt(this.id) < 18) ||
    parseInt(this.id) === 111 ||
    parseInt(this.id) === 112
  ) {
    if (old != null) old.firstElementChild.style.border = "none";
    old = thisWun;
    colour = cul;
    // problem starts here
    if (cul != "redPin" && cul != "wytPin") {
      var cursed = "url(" + cursor[colour] + "),move";
      document.querySelector("body").style.cursor = cursed;
    } else if (cul === "redPin")
      document.querySelector("body").style.cursor =
        "url(" + "https://i.ibb.co/jkNJSQy/red-Cursor.png" + "),move";
    else
      document.querySelector("body").style.cursor =
        "url(" + "https://i.ibb.co/dgw525d/wyt-Cursor.png" + "),move";
  } else {
    if (colour != "redPin" && colour != "wytPin") {
      thisWun.innerHTML = '<img src="' + imijiz[colour] + '">';
      ges = wich + " " + colour;
      socit.emit("ges", ges);
    } else thisWun.innerHTML = '<img id="pinz" src="' + imijiz[colour] + '">';
  }
}
var all = document.querySelectorAll("td");
a = 0;
while (a < all.length) {
  if (all[a].id != "111" && all[a].id != "112") all[a].setAttribute("id", a);
  all[a].addEventListener("click", clict);
  a++;
}
function mode() {
  if (guesser === true) {
    document
      .getElementById("00")
      .insertAdjacentHTML(
        "afterend",
        '<img class="noBac" class="noGray" id="submitGes" onclick="submitGes()" src="https://i.ibb.co/ck0G1KW/subMit.png">'
      );
    sub = document.querySelector("#submitGes");
  } else {
    document.querySelector("#colz").remove();
    var imij = document.createElement("img");
    imij.setAttribute("src", "https://i.ibb.co/ck0G1KW/subMit.png");
    imij.setAttribute("id", "submitMayc");
    imij.setAttribute("class", "noBac");
    imij.setAttribute("onclick", "submitMayc()");
    document
      .querySelector("span")
      .insertBefore(imij, document.getElementById("000"));
  }
}
document.querySelector("#RW").style.cursor = "pointer";
function submitMayc() {
  count++;
  imij.remove();
  document
    .querySelector("span")
    .insertBefore(imij, document.getElementById("00" + count.toString()));
  imij = document.querySelector("#submitMayc");
}

function submitGes() {
  var aaft = document.getElementById("0" + count.toString());
  count++;
  if (sub !== null) sub.remove();
  aaft = document.getElementById("0" + count.toString());
  aaft.insertAdjacentHTML(
    "afterend",
    '<img id="submitGes" onclick="submitGes()" src="https://i.ibb.co/ck0G1KW/subMit.png">'
  );
  sub = document.querySelector("#submitGes");
}
