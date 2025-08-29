const container = document.querySelector("#container");

const newDiv = document.createElement("div");
newDiv.textContent = "Appended element";
// newDiv.className = "demo"
newDiv.classList.add("demo");

container.append(newDiv);

const newDiv2 = document.createElement("div");
newDiv2.textContent = "Prepended element";
newDiv2.classList.add("demo");

container.prepend(newDiv2);

const newDiv3 = document.createElement("div");
newDiv3.textContent = "Inserted before target";
newDiv3.className = "demo";

container.before(newDiv3);

const newDiv4 = document.createElement("div");
newDiv4.textContent = "Inserted after target";
newDiv4.className = "demo";

container.after(newDiv4);

const newDiv5 = document.createElement("div");
newDiv5.textContent = "Replaced element";
newDiv5.className = "demo";

newDiv3.replaceWith(newDiv5);

const htmlString = `<div class="demo"> HTML Inserted with InsertAdjacentHTML</div>`;

container.insertAdjacentHTML("beforebegin", htmlString);
container.insertAdjacentHTML("afterbegin", htmlString);
container.insertAdjacentHTML("beforeend", htmlString);
container.insertAdjacentHTML("afterend", htmlString);

container.lastElementChild.remove();

const cloneEl = newDiv5.cloneNode(true);
cloneEl.textContent += "(clone)";
container.append(cloneEl);

const fragment = new DocumentFragment();
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Fragment item ${i}`;
  fragment.append(li);
}

container.append(fragment);
