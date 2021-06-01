//let a = 2 + 2;
/*
switch(a) {
    case 3:
        alert("Маловато");
        break;
    case 4:
        alert("В точку!");
        break;
    case 5:
        alert("Перебор!");
        break;
    default:
        alert("Нет таких значений");
}
*/
/*
switch (a) {
  case 3:
    alert("Маловато");
  case 4:
    alert("В точку!");
  case 5:
    alert("Перебор");
  default:
    alert("Нет таких значений");
}
*/
/*
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("Yes");
    break;
  default:
    alert("No");
}
*/
/*
let a = 2 + 2;

switch (a) {
  case 4:
    alert("Correctly");
    break;

  case 3: //группировка
  case 5:
    alert("Not correctly");
    break;

  default:
    alert("Strange");
}
*/

/*
let arg = prompt("Введите число");

switch (arg) {
  case "0":
  case "1":
    alert("One or null");
    break;

  case "2":
    alert("two");
    break;

  case 3:
    alert("Не выпoлнится");
    break;

  default:
    alert("Not found");
}
*/

/*
let browser = "Chrome";
if (browser == "Edge") {
  alert("You've got the Edge");
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Opera") {
  alert("Okay we support these browsers, too");
} else {
  alert("We hope that this page looks ok!");
}
*/

const number = +prompt("Enter a number between 0 and 3", "");

switch (number) {
  case 0:
    alert("You entered number null");
    break;

  case 1:
    alert("You entered number one");
    break;

  case 2:
  case 3:
    alert("You entered number two or three");
    break;

  default:
    alert("Not correctly");
}
