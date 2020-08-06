const student = [
    {id: 11, name: "Sunny"},
    {id: 12, name: "Susdny"},
    {id: 14, name: "Suvny"},
    {id: 46, name: "Suny"},
];

const names = student.find(s => s.id> 11);
console.log(names)