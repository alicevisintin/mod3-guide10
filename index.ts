// Person Interface
interface Person {
  id: number;
  name: string;
  birthdate: string;
  children: number;
  country: string;
  can_program: boolean;
}

// transform data into an array
const people: Person[] = [
  {
    id: 1,
    name: "Dolli Hampson",
    birthdate: "1/11/1955",
    children: 4,
    country: "Macedonia",
    can_program: true
  },
  {
    id: 2,
    name: "Lilia O'Shee",
    birthdate: "12/29/1983",
    children: 4,
    country: "Indonesia",
    can_program: false
  },
  {
    id: 3,
    name: "Ianthe Napoli",
    birthdate: "10/25/1954",
    children: 3,
    country: "Panama",
    can_program: false
  },
  {
    id: 4,
    name: "Claudianus Jenicek",
    birthdate: "7/14/1966",
    children: 0,
    country: "Poland",
    can_program: false
  },
  {
    id: 5,
    name: "Micheil Fedder",
    birthdate: "1/24/1974",
    children: 3,
    country: "China",
    can_program: false
  },
  {
    id: 6,
    name: "Booth Letten",
    birthdate: "10/19/2003",
    children: 5,
    country: "Morocco",
    can_program: true
  },
  {
    id: 7,
    name: "Benedikt Eustis",
    birthdate: "4/5/1992",
    children: 5,
    country: "Thailand",
    can_program: false
  },
  {
    id: 8,
    name: "Mirna Grabeham",
    birthdate: "3/31/1954",
    children: 4,
    country: "France",
    can_program: false
  },
  {
    id: 9,
    name: "Heriberto Heinemann",
    birthdate: "7/16/2004",
    children: 0,
    country: "Greece",
    can_program: true
  },
  {
    id: 10,
    name: "Gun Vaggers",
    birthdate: "3/23/1992",
    children: 4,
    country: "Togo",
    can_program: false
  }
];


// A. how many children all people have in total
let totalChildren = 0;
for (let i = 0; i < people.length; i++) {
  totalChildren += people[i].children;
}
console.log("Total number of children:", totalChildren);


// B. one string per person formatted as such: name: Age
for (let i = 0; i < people.length; i++) {
  console.log("Name: ${people.name} Age: ${people.birthdate}");
}


// C. All properties of people (name, birthdate, children, country, can_program)
for (let i = 0; i < people.length; i++) {
  console.log("
      name: ${ people.name }
      birthdate: ${ people.birthdate }
      children: ${ people.children }
      country: ${ people.country }
      can_program: ${ people.canProgram }")
  }
