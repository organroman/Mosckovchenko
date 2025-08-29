/** 
 * Використовуючи HTML, CSS та JavaScript, відрендерити список карток товарів на сторінці.
 * Динамічно генерувати картки товарів і вставляти їх в DOM за допомогою JavaScript.
 * Кожна картка повинна містити: 
        Назву товару (<h3>)
        Стилізований ціновий блок:
            Якщо знижка > 0, показати стару ціну з закресленням і нову ціну, 
            розраховану з урахуванням знижки.
            Якщо знижки немає, показувати тільки оригінальну ціну.
        Додаткові мітки вгорі (у вигляді кольорових тегів):
        "NEW", якщо isNew is true
        "SALE", якщо знижка > 0
Використовуйте класи CSS для стилізації карток.
 */
const products = [
  { name: "Wireless Mouse", price: 1200, isNew: true, discount: 10 },
  { name: "Keyboard", price: 900, isNew: false, discount: 0 },
  { name: "USB-C Hub", price: 1500, isNew: false, discount: 20 },
  { name: "Webcam", price: 2100, isNew: true, discount: 0 },
];

const div = document.querySelector("#product-list");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";
  const labels = document.createElement("div");
  labels.className = "labels";

  if (product.isNew) {
    const newLabel = document.createElement("span");
    newLabel.className = "label label-new";
    newLabel.innerText = "NEW";
    labels.append(newLabel);
  }
  if (product.discount > 0) {
    const saleLabel = document.createElement("span");
    saleLabel.className = "label label-sale";
    saleLabel.innerText = "SALE";
    labels.append(saleLabel);
  }
  const title = document.createElement("h3");
  title.innerText = product.name;

  const priceContainer = document.createElement("div");
  priceContainer.className = "price";

  if (product.discount > 0) {
    const oldPrice = document.createElement("span");
    oldPrice.className = "price-old";
    oldPrice.innerText = product.price;

    const newPrice = document.createElement("span");
    newPrice.className = "price-new";
    newPrice.innerText = Math.round(
      product.price * (1 - product.discount / 100)
    );
    priceContainer.append(oldPrice);
    priceContainer.append(newPrice);
  } else priceContainer.textContent = product.price;
  card.append(labels);
  card.append(title);
  card.append(priceContainer);
  
  div.append(card);
});
