import { Cat, Dog, createCatName } from "./animal";

// @filename: app.ts
export type Animals = Cat | Dog;
const name = createCatName();

console.log(name);
