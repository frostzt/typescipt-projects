import { User } from "./models/User";

const user = new User({ name: "Sourav", age: 21 });
user.on("change", () => {});

console.log(user);
