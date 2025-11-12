//array of students

let students = [
  { name: "Aoife", rating: 4.5 },
  { name: "Caoimhe", rating: 3.8 },
  { name: "Saoirse", rating: 4.2 },
  { name: "Darragh", rating: 4.9 },
  { name: "Eoin", rating: 3.5 },
];

/**
 * Prints the name and rating of each student in the students array.
 */
function printAllStudents() {
  for (let i = 0; i < students.length; i++) {
    console.log("Name:", students[i].name, "- Rating:", students[i].rating);
  }
}

//calculate average ratings

function calculateAverage() {
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total += students[i].rating;
  }
  const avg = total / students.length;
  return Math.round(avg * 10) / 10;
}

console.log("Initial students");
printAllStudents();

console.log("\nAverage rating:", calculateAverage());

students.push({ name: "Connall", rating: 5 });
students[1].rating = 2;

//print updated results
console.log("\nUpdated students:");
printAllStudents();
console.log("\nNew average rating:", calculateAverage());
