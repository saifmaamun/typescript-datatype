"use strict";
const sscTeacher = ["raju", "pavel", "niloy"];
const hscTeacher = ["chandan", "babu", "mithu"];
const teachers = [];
teachers.push(...sscTeacher, ...hscTeacher);
console.log(teachers);
const greatings = (...teachers) => {
    teachers.forEach((teacher) => {
        console.log(`Hi ${teacher}`);
    });
};
greatings("raju", "pavel", "niloy", "chandan", "babu", "mithu");
