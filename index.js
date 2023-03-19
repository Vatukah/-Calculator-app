//initialisation
let display = document.getElementById("Calc_display");
let equal = document.getElementById("equal");
let del = document.getElementById("del");
let reset = document.getElementById("reset");
let theme_1 = document.getElementById("theme_1");
let theme_2 = document.getElementById("theme_2");
let theme_3 = document.getElementById("theme_3");
let toggle = document.getElementById("toggle");
let Body = document.getElementById("Body");
let keys = document.querySelectorAll(".key");
let keyPad = document.getElementById("keySect");
let topBar = document.getElementById("top");
let toggleBtn = document.getElementById("toggleBtn");
let att = document.getElementById("attribution");
//updating user's selected theme
function userTheme() {
  let theme = window.localStorage.getItem("userTheme");
  if (theme == "darkBlueTheme") {
    darkBlueTheme();
  } else if (theme == "lightGreyTheme") {
    lightGreyTheme();
  } else {
    voiletTheme();
  }
}
//function to input command
function input(e) {
  display.innerText += e;
}
// function to sum the equation
equal.addEventListener("click", () => {
  if (display.innerText == "") {
  } else {
    var content = display.innerText;
    if (content.includes("x")) {
      content = content.replaceAll("x", "*");
    }
    var sum = eval(content);
    display.innerText = sum;
  }
});
//function to delete one character
del.addEventListener("click", () => {
  var content = display.innerText.length;
  content--;
  var str = display.innerText;
  str = str.slice(0, content);
  display.innerText = str;
});
// function to clear the display area
reset.addEventListener("click", () => {
  display.innerText = "";
});

//click to change the theme

theme_1.addEventListener("click", () => {
  darkBlueTheme();
  window.localStorage.setItem("userTheme", "darkBlueTheme");
});

theme_2.addEventListener("click", () => {
  lightGreyTheme();
  window.localStorage.setItem("userTheme", "lightGreyTheme");
});

theme_3.addEventListener("click", () => {
  voiletTheme();
  window.localStorage.setItem("userTheme", "voiletTheme");
});

function darkBlueTheme() {
  toggle.style.justifyContent = "flex-start";
  toggle.style.background = "hsl(223, 31%, 20%)";
  toggle.children[0].style.backgroundColor = "hsl(6, 63%, 50%)";
  Body.style.backgroundColor = " hsl(222, 26%, 31%)";
  topBar.style.color = " hsl(0, 0%, 100%";
  display.style.background = "hsl(224, 36%, 15%)";
  display.style.color = "hsl(0, 0%, 100%)";
  keyPad.style.backgroundColor = " hsl(223, 31%, 20%)";
  for (var i = 0; i < 18; i++) {
    keys[i].style.backgroundColor = "hsl(30, 25%, 89%)";
    keys[i].style.borderBottomColor = "hsl(28, 16%, 65%)";
    keys[i].style.color = " hsl(221, 14%, 31%)";
  }
  keys[3].style.backgroundColor = "hsl(225, 21%, 49%)";
  keys[3].style.borderBottomColor = "hsl(224, 28%, 35%)";
  keys[3].style.color = " hsl(0, 0%, 100%)";

  keys[16].style.backgroundColor = "hsl(225, 21%, 49%)";
  keys[16].style.borderBottomColor = "hsl(224, 28%, 35%)";
  keys[16].style.color = " hsl(0, 0%, 100%)";

  keys[17].style.backgroundColor = "hsl(6, 63%, 50%)";
  keys[17].style.borderBottomColor = " hsl(6, 70%, 34%)";
  keys[17].style.color = " hsl(0, 0%, 100%)";
  att.style.background = "rgba(255, 255, 255, 0.2)";
}

function lightGreyTheme() {
  toggle.style.justifyContent = "center";
  toggle.style.background = " hsl(0, 5%, 81%)";
  toggle.children[0].style.backgroundColor = " hsl(25, 98%, 40%)";
  Body.style.backgroundColor = "  hsl(0, 0%, 90%)";
  display.style.background = "hsl(0, 0%, 93%)";
  display.style.color = "hsl(60, 10%, 19%)";
  keyPad.style.backgroundColor = "  hsl(0, 5%, 81%)";
  topBar.style.color = " hsl(60, 10%, 19%)";
  for (var i = 0; i < 18; i++) {
    keys[i].style.backgroundColor = " hsl(45, 7%, 89%)";
    keys[i].style.borderBottomColor = "hsl(35, 11%, 61%)";
    keys[i].style.color = " hsl(60, 10%, 19%)";
  }
  keys[3].style.backgroundColor = " hsl(185, 42%, 37%)";
  keys[3].style.borderBottomColor = "hsl(185, 58%, 25%)";
  keys[3].style.color = " hsl(0, 0%, 100%)";

  keys[16].style.backgroundColor = " hsl(185, 42%, 37%)";
  keys[16].style.borderBottomColor = "hsl(185, 58%, 25%)";
  keys[16].style.color = " hsl(0, 0%, 100%)";

  keys[17].style.backgroundColor = " hsl(25, 98%, 40%)";
  keys[17].style.borderBottomColor = "hsl(25, 99%, 27%)";
  keys[17].style.color = " hsl(0, 0%, 100%)";
  att.style.background = "rgba(71, 70, 70, 0.2)";
}

function voiletTheme() {
  toggle.style.justifyContent = "flex-end";
  toggle.style.background = "hsl(268, 71%, 12%)";
  toggle.children[0].style.backgroundColor = "hsl(176, 100%, 44%)";
  Body.style.backgroundColor = "   hsl(268, 75%, 9%)";
  display.style.background = "hsl(268, 71%, 12%)";
  display.style.color = "hsl(52, 100%, 62%)";
  keyPad.style.backgroundColor = " hsl(268, 71%, 12%)";
  topBar.style.color = " hsl(52, 100%, 62%) ";
  for (var i = 0; i < 18; i++) {
    keys[i].style.backgroundColor = " hsl(268, 47%, 21%)";
    keys[i].style.borderBottomColor = "hsl(290, 70%, 36%)";
    keys[i].style.color = "  hsl(52, 100%, 62%)";
  }
  keys[3].style.backgroundColor = "hsl(281, 89%, 26%)";
  keys[3].style.borderBottomColor = "hsl(285, 91%, 52%)";
  keys[3].style.color = " hsl(0, 0%, 100%)";

  keys[16].style.backgroundColor = "hsl(281, 89%, 26%)";
  keys[16].style.borderBottomColor = "hsl(285, 91%, 52%)";
  keys[16].style.color = " hsl(0, 0%, 100%)";

  keys[17].style.backgroundColor = "hsl(176, 100%, 44%)";
  keys[17].style.borderBottomColor = "hsl(177, 92%, 70%)";
  keys[17].style.color = "  hsl(198, 20%, 13%)";
  att.style.background = "rgba(255, 255, 255, 0.2)";
}
