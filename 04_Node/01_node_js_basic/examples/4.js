import http from "http";

const facts = [
  "В Україні знаходиться найбільше в світі родовище марганцевої руди, а також найдовша гіпсова печера у світі - Оптимістична.",
  "В Україні також знаходиться найстаріший навчальний заклад Східної Європи - Острозька академія.",
  "Крім того, українська трембіта є найдовшим музичним інструментом у світі",
];

const server = http.createServer((req, res) => {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end("Fact:" + fact);
});

server.listen(3001, () => {
  console.log("Server running at localhost:3001");
});
