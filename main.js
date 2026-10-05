const Student = require("./models");
const { fetchStudents } = require("./database");
const { calculateClassAverage, findTopStudent, filterStudents } = require("./analytics");

console.log("Fetching data from database...");