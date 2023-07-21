"use strict";
// ------------------Unknown--------------------------------
const person = {
    name: 'Huy',
    birthYear: 1995
};
// const printNameOrAge = (info: unknown) => {
//   if (typeof info === 'number')
//     console.log(`printing Age ${new Date().getFullYear() - info}`);
//   else {
//     console.log(`printing Name ${info}`);
//   }
// };
const printNameOrAgeWithAny = (info) => {
    console.log(`printing Age ${new Date().getFullYear() - info}`);
};
// printNameOrAge(person.birthYear);
printNameOrAgeWithAny(person.name);
