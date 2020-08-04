const userInput = prompt("Какое количество дроидов вы хотите купить?");
let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let result;

if (userInput === null) {
  result = "Отменено пользователем!";
} else if (isNaN(userInput)) {
  result = "Введите число.";
} else {
  totalPrice = userInput * pricePerDroid;
}

if (!result) {
  if (credits - totalPrice <= 0) {
    console.log("Недостаточно средств на счету!");
  } else {
    credits = credits - totalPrice;
    console.log(
      "Вы купили " +
        userInput +
        " дроидов, на счету осталось " +
        credits +
        " кредитов"
    );
  }
} else {
  console.log(result);
}
