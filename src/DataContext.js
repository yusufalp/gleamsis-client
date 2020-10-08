import React from 'react';

const DataContext = React.createContext({
  teachers: [],
  students: [],
  courses: [],
  addTeacher: () => { }
})

export default DataContext;