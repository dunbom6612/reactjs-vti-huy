"use strict";
//-------------------Generic--------------------------------
const arrColors = ['red', 'blue', 'yellow', 'red'];
const getDictinctArray = (arg) => {
    const list = new Set();
    arg.forEach((element) => {
        list.add(element);
    });
    return list;
};
console.log('Array color ', getDictinctArray(arrColors));
