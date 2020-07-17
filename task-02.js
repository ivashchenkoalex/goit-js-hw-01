let productStock;
const total = 100;
const ordered = 130;

if (ordered > total) {
  productStock = "На складе недостаточно твоаров!";
} else {
  productStock = "Заказ оформлен, с вами свяжется менеджер";
}
console.log(productStock);
