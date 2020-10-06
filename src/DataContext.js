import React from 'react';

const DataContext = React.createContext({
  teachers: [],
  courses: [],
  classes: [],
  addTeacher: () => { },
  deleteTeacher: () => { }
})

export default DataContext;