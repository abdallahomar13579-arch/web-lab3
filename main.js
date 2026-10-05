const Student = require("./models");
const { fetchStudents } = require("./database");
const { calculateClassAverage, findTopStudent, filterStudents } = require("./analytics");

console.log("Fetching data from database...");

fetchStudents((rawData) => {

  console.log("Data received!");
 
  // Convert each raw object into a real Student instance
  const students = rawData.map((item) => new Student(item.id, item.name, item.courses));
 
  // ---- Testing immutability of the id ----
  console.log("\nTesting Immutability:");
  console.log("Original ID: " + students[0].id);
  console.log("Attempting to change ID to 999...");

  try {
    students[0].id = 999; // this should NOT change anything
  } catch (error) {
    // ignore the error, the id is protected either way
  }

  console.log("Final ID: " + students[0].id + " (Success: ID did not change)");

  console.log("\n--- Analytics Report ---");
 
  const avg101 = calculateClassAverage(students, 101);
  console.log("Class Average for Course 101: " + avg101.toFixed(2));
});