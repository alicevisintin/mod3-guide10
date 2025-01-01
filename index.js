// transform data into an array
var People = [
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



var totalChildren = people.reduce(function (sum, person) { return sum + person.children; }, 0);

console.log("The total number of children for all people is: ".concat(totalChildren));





// A. how many children all people have in total
var totalChildren = 0;
for (var i = 0; i < people.length; i++) {
  totalChildren += people[i].children;
}
console.log("Total number of children:", totalChildren);


// B. one string per person formatted as such: name: Age
for (var i = 0; i < people.length; i++) {
  console.log("Name:".concat(people.name, "birthdate:").concat(people.birthdate));
}


// C. All properties of people (name, birthdate, children, country, can_program)
for (var i = 0; i < people.length; i++) {
  console.log("name:".concat(people.name),
    "birthdate: ".concat(people.birthdate),
    "children: ".concat(people.children),
    "country: ".concat(people.country),
    "can_program: ".concat(people.canProgram));
}


