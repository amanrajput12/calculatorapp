console.log("hello");
const display1EL = document.querySelector(".display-1");
const display2EL = document.querySelector(".display-2");
const temprstEL = document.querySelector(".temp-result");
const numberEL = document.querySelectorAll(".number");
const operationEL = document.querySelectorAll(".operation");
const equalEL = document.querySelector(".equal");
const clearEL = document.querySelector(".all-clear");
const clearLastEL = document.querySelector(".last-entity-clear");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastoperation = "";
let haveDot = false;

numberEL.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText == "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText == "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2EL.innerText = dis2Num;
    console.log(display1EL);
  });
});

operationEL.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const opertionName = e.target.innerText;
    if (dis1Num && dis2Num && lastoperation) {
      mathoperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(opertionName);
    lastoperation = opertionName;
  });
});

function clearVar(name = "") {
  dis1Num += dis2Num + "" + name + "";
  display1EL.innerText = dis1Num;
  display2EL.innerHTML = "";
  dis2Num = "";
  temprstEL.innerHTML = result;
}
function mathoperation() {
  if (lastoperation == "*") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastoperation == "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastoperation == "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastoperation == "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastoperation == "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}
equalEL.addEventListener("click", (e) => {
  if (!dis1Num || !dis2Num) return;
  haveDot = false;
  mathoperation();
  clearVar();
  display2EL.innerHTML = result;
  temprstEL.innerHTML = "";
  dis2Num = result;
  dis1Num = "";
});
clearEL.addEventListener("click", (e) => {
  display1EL.innerHTML = "0";
  display2EL.innerHTML = "0";
  dis1Num = "";
  dis2Num = "";
  result = "";
  temprstEL.innerHTML = "";
});
clearLastEL.addEventListener("click", (e) => {
  display2EL.innerHTML = "";
  dis2Num = "";
});
