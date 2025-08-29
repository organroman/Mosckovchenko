// console.log("Hello node!");

import fs from "fs";
import http from "http";

fs.writeFileSync("message.txt", "You are awesome!");

const content = fs.readFileSync("message.txt", "utf-8");
console.log(content);

const server = http.createServer((req, res) => {
  res.end("Hey, this is my server!");
});

server.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
