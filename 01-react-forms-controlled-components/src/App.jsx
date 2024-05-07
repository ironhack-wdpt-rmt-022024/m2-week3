import './App.css'
import { useState } from 'react';
import AddStudentForm from './components/AddStudentForm';

// const studentsData = [ 
//   { firstName: "Laura", course: "WD"}, 
//   { firstName: "Rafa", course: "WD"},
// ]

function App() {
  const [students, setStudents] = useState([]);

  function addStudent(studentObj) {
    // Create a copy of the stduents array and add a new object at the end
    const updatedStudents = [studentObj, ...students];

    // Set the updated students array as the new state
    setStudents(updatedStudents);
  }

  return (
    <>
      <h1>WDPT 2024</h1>

      <AddStudentForm addStudent={addStudent} />

      {
        students.map((student) => {
          return (
            <div style={{ border: "1px solid black"}}>
              <p><b>Student Name:</b> {student.firstName} </p>
              <p><b>Course:</b> {student.course} </p>
              <p><b>Age:</b> {student.age} </p>
              <p><b>Has Graduated:</b> {student.hasGraduated ? "✅" : "❌"} </p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
