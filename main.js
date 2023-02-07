let themeElement = document.querySelector(".toggle-checkbox");
let themeInputs = document.querySelectorAll(".toggle-checkbox input");

themeElement.addEventListener("click", function () {
  let current;
  for (let i = 0; i < themeInputs.length; i++) {
    if (themeInputs[i].checked) {
      themeInputs[i].checked = false;
      if (i + 1 === themeInputs.length) {
        themeInputs[0].checked = true;
        current = themeInputs[0];
      } else {
        themeInputs[i + 1].checked = true;
        current = themeInputs[i + 1];
      }
      break;
    }
  }
  if (current.dataset.theme === "two") {
    removeStyle();
    document.documentElement.style.setProperty("--main-bg", "hsl(0, 0%, 90%)");
    document.documentElement.style.setProperty(
      "--display-bg",
      "hsl(0, 0%, 93%)"
    );
    document.documentElement.style.setProperty("--btns-bg", "hsl(0, 5%, 81%)");
    document.documentElement.style.setProperty(
      "--text-color",
      "hsl(60, 10%, 19%)"
    );
    document.documentElement.style.setProperty(
      "--del-bg",
      "hsl(185, 42%, 37%)"
    );
    document.documentElement.style.setProperty(
      "--del-color",
      "hsl(185, 58%, 25%)"
    );
    document.documentElement.style.setProperty("--del-hover-color", "#62b5bb");
    document.documentElement.style.setProperty("--red-bg", "hsl(25, 98%, 40%)");
    document.documentElement.style.setProperty(
      "--red-shadow",
      "hsl(25, 99%, 27%)"
    );
    document.documentElement.style.setProperty("--red-hover-bg", "#ff8b38");
    document.querySelectorAll(".btns .same").forEach((btn) => {
      btn.style.color = "hsl(60, 10%, 19%)";
    });
  } else if (current.dataset.theme === "three") {
    removeStyle();
    document.documentElement.style.setProperty(
      "--main-bg",
      "hsl(268, 75%, 9%)"
    );
    document.documentElement.style.setProperty(
      "--display-bg",
      "hsl(268, 71%, 12%)"
    );
    document.documentElement.style.setProperty(
      "--btns-bg",
      "hsl(268, 71%, 12%)"
    );
    document.documentElement.style.setProperty(
      "--btn-color",
      "hsl(268, 47%, 21%)"
    );
    document.documentElement.style.setProperty(
      "--btn-shadow",
      "hsl(290, 70%, 36%)"
    );
    document.documentElement.style.setProperty("--btn-hover-bg", "#6b34ac");
    document.documentElement.style.setProperty(
      "--text-color",
      "hsl(52, 100%, 62%)"
    );
    document.documentElement.style.setProperty("--del-bg", "#56077c");
    document.documentElement.style.setProperty("--del-color", "#b819ec");
    document.documentElement.style.setProperty("--del-hover-color", "#8631b0");
    document.documentElement.style.setProperty(
      "--red-bg",
      "hsl(176, 100%, 44%)"
    );
    document.documentElement.style.setProperty(
      "--red-shadow",
      "hsl(177, 92%, 70%)"
    );
    document.documentElement.style.setProperty("--red-hover-bg", "#94fff9");
    document.querySelectorAll(".btns .same").forEach((btn) => {
      btn.style.color = "hsl(52, 100%, 62%)";
    });
    document.querySelector(".btns .equal").style.color = "hsl(268, 71%, 12%)";
  } else {
    removeStyle();
  }
});

function removeStyle() {
  document.querySelectorAll("*").forEach((e) => {
    e.removeAttribute("style");
  });
}

let display = document.querySelector(".display");
let numsBtns = document.querySelectorAll(".btns .num");
let dotBtn = document.querySelector(".btns .dot");
let delBtn = document.querySelector(".btns .del");
let operationElements = document.querySelectorAll(".btns .operation");
let equalBtn = document.querySelector(".btns .equal");
let resetBtn = document.querySelector(".btns .reset");

numsBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    display.innerHTML.length !== 15
      ? (display.innerHTML += btn.dataset.num)
      : e.preventDefault();
  });
});

dotBtn.addEventListener("click", function (e) {
  if (display.innerHTML.includes(".") || display.innerHTML.length == 14) {
    e.preventDefault();
  } else {
    display.innerHTML === ""
      ? (display.innerHTML += `0${dotBtn.dataset.operation}`)
      : (display.innerHTML += dotBtn.dataset.operation);
  }
});

delBtn.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.slice(0, -1);
});

let result = [];

operationElements.forEach((operation) => {
  operation.addEventListener("click", function (e) {
    if (display.innerHTML !== "") {
      result.push(display.innerHTML);
      result.push(operation.dataset.operation);
      display.innerHTML = "";
    }
  });
});

equalBtn.addEventListener("click", function (e) {
  result.push(display.innerHTML);
  display.innerHTML = eval(result.join(""));
  result = [];
});

resetBtn.addEventListener("click", function () {
  display.innerHTML = "";
  firstNum = "";
  secondNum = "";
  operator = "";
  result = "";
});

window.onkeydown = function (e) {
  e.key == 0 ? document.querySelector(`[data-num="0"]`).click() : "";
  e.key == 1 ? document.querySelector(`[data-num="1"]`).click() : "";
  e.key == 2 ? document.querySelector(`[data-num="2"]`).click() : "";
  e.key == 3 ? document.querySelector(`[data-num="3"]`).click() : "";
  e.key == 4 ? document.querySelector(`[data-num="4"]`).click() : "";
  e.key == 5 ? document.querySelector(`[data-num="5"]`).click() : "";
  e.key == 6 ? document.querySelector(`[data-num="6"]`).click() : "";
  e.key == 7 ? document.querySelector(`[data-num="7"]`).click() : "";
  e.key == 8 ? document.querySelector(`[data-num="8"]`).click() : "";
  e.key == 9 ? document.querySelector(`[data-num="9"]`).click() : "";
  e.key == "+" ? document.querySelector(`[data-operation="+"]`).click() : "";
  e.key == "-" ? document.querySelector(`[data-operation="-"]`).click() : "";
  e.key == "*" ? document.querySelector(`[data-operation="*"]`).click() : "";
  e.key == "/" ? document.querySelector(`[data-operation="/"]`).click() : "";
  e.key == "Enter" ? equalBtn.click() : "";
  e.key == "Delete" || e.key == "Backspace" ? delBtn.click() : "";
  e.key == "Tab" ? themeElement.click() : "";
};
