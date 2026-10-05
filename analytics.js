function calculateClassAverage(students, courseId) {

    const grades = [];
    
  students.forEach((student) => {
    student.courses.forEach((course) => {
      if (course.courseId === courseId) {
        grades.push(course.grade);
      }
    });
  });
}