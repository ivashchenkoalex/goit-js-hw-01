let userInput = prompt("В какую страну вы хотите оформить доставку?");
let cost;
userInput = userInput.toLowerCase();
switch (userInput) {
  case "китай":
    cost = 100;
    break;

  case "чили":
    cost = 250;
    break;

  case "австралия":
    cost = 170;
    break;

  case "индия":
    cost = 170;
    break;

  case "ямайка":
    cost = 170;
    break;

  default:
    console.log("В вашей стране доставка не доступна");
}

// alert('Доставка в ${userInput.toUpperCase()} будет стоить ${cost} кредитов");

alert(
  "Доставка в " +
    userInput.toUpperCase() +
    " будет стоить " +
    cost +
    " кредитов"
);
