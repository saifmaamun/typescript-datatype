// normal function
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// arrow function
const addArrow = (n1: number, n2: number): number => {
  return n1 + n2;
};

const student: {
  nationality: "Bangladesh"; //literal type
  name: string;
  marks: number;
  addMark(mark: number): string;
} = {
  nationality: "Bangladesh",
  name: "mamun",
  marks: 28,
  addMark(mark: number): string {
    return `My mark is${this.marks + mark}`;
  },
};

const numArray: number[] = [5, 6, 8, 17, 3];

const squreNums: number[] = numArray.map((elem: number): number => elem * elem);
