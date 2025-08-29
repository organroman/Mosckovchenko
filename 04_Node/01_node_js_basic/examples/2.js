const friends = [
  { name: "Jane", birthday: "07-17" },
  { name: "John", birthday: "08-21" },
  { name: "Kate", birthday: "08-21" },
  { name: "Sam", birthday: "08-28" },
];

const today = new Date();
const todayString = today.toISOString().slice(5, 10);

friends.forEach((friend) => {
  if (friend.birthday === todayString) {
    console.log(`Happy birthday, ${friend.name}`);
  }
});
