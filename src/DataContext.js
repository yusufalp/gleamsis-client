import React from 'react';

const DataContext = React.createContext({
  teachers: [],
  students: [],
  courses: [],
  addTeacher: () => { },
  addCourse: () => { },
  addStudent: () => { }
})

export default DataContext;