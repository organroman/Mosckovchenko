const title = document.getElementById("title");
console.log(title);

const description = document.getElementsByClassName("description");
console.log(description);

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

const card = document.getElementsByName("demo-card");
console.log(card);

const firstText = document.querySelector(".text");
console.log("🚀 ~ firstText:", firstText);

const allText = document.querySelectorAll(".text");
console.log("🚀 ~ allText:", allText);

// style, className, classList.

console.log(firstText.className);
console.log(firstText.classList.contains("text"));

firstText.classList.add("highlight");
firstText.classList.remove("highlight");

firstText.style.color = "red";
firstText.style.fontWeight = "bold";

// innerHTML, outerHTML, textContent

console.log("innerHTML", firstText.innerHTML);
console.log("outerHTML", firstText.outerHTML);
console.log("textContent", firstText.textContent);

firstText.textContent = "Good by JS";
firstText.innerHTML = "<h2>Good by JS</h2>";

const listItems = document.querySelectorAll(".item");

listItems.forEach((item, index) =>
  console.log(`item with number ${index+ 1}: ${item.textContent}`)
);
