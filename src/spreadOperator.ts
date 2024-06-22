const sscTeacher: string[] = ["raju", "pavel", "niloy"];
const hscTeacher: string[] = ["chandan", "babu", "mithu"];

const teachers = [];
teachers.push(...sscTeacher, ...hscTeacher);
console.log(teachers);

const greatings = (...teachers: string[]) => {
  teachers.forEach((teacher: string) => {
    console.log(`Hi ${teacher}`);
  });
};

greatings("raju", "pavel", "niloy", "chandan", "babu", "mithu");
