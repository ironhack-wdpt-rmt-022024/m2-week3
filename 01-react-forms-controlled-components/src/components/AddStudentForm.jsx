import { useState } from 'react';

function AddStudentForm (props) {
  const [firstName, setFirstName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState(21);
  const [hasGraduated, setHasGraduated] = useState(false);

  function handleFirstNameInput (e) { 
    setFirstName(e.target.value)
  };

  const handleCourseInput = (e) => setCourse(e.target.value);

  const handleAgeInput = (e) => setAge(e.target.value);

  const handleHasGraduatedInput = (e) => setHasGraduated(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentObj = {
      firstName: firstName,
      course: course,
      age: age,
      hasGraduated: hasGraduated
    }

    // Send data to App.jsx to add it to the list
    props.addStudent(studentObj);
    // Reset the form inputs
    setFirstName("");
    setCourse("");
    setAge(21);
    setHasGraduated(false);
  }
  
  return(
    <div style={{ border: "1px solid red"}}>
      <h2>Add a Student</h2>

      <form onSubmit={handleSubmit} >
        <label>Student Name</label>
        <input name="firstName" value={firstName} onChange={handleFirstNameInput} />
        <br />

        <label>Course</label>
        <input name="course" value={course} onChange={handleCourseInput} />
        <br />

        <label>Age</label>
        <input type="number" name="age" value={age} onChange={handleAgeInput} />
        <br />

        <label>Has Graduated</label>
        <input type="checkbox" name="hasGraduated" checked={hasGraduated} onChange={handleHasGraduatedInput} />        
        <br />

        <button type="submit">Add Student to the List</button>
      </form>
    </div>
  )
}

export default AddStudentForm;