import React from 'react';

const DataContext = React.createContext({
  teachers: [],
  students: [],
  courses: [],
  addTeacher: () => { },
  addCourse: () => { },
  addStudent: () => { },
  deleteTeacher: () => { },
  deleteStudent: () => { },
  getTeachers: () => { },
  getStudents: () => { },
  getCourses: () => { }
})

export default DataContext;