"use strict";
// normal function
function add(n1, n2) {
    return n1 + n2;
}
// arrow function
const addArrow = (n1, n2) => {
    return n1 + n2;
};
const student = {
    nationality: "Bangladesh",
    name: "mamun",
    marks: 28,
    addMark(mark) {
        return `My mark is${this.marks + mark}`;
    },
};
const numArray = [5, 6, 8, 17, 3];
const squreNums = numArray.map((elem) => elem * elem);
