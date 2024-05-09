import { useState } from 'react';

function AddItemForm (props) {
  // Controlled component - 
  // react component that stores input values in the state and controls it
  // 1. render the input   2. connect input to the state   3. handle input changes
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [course, setCourse] = useState("Web Dev");


  const handleNameInput  = (e) => setName(e.target.value);
  const handlePriceInput = (e) => setPrice(e.target.value);
  const handleCourseInput = (e) => setCourse(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // do not reload the page

    // Send data to another component -> App.jsx
    props.addItem({ name: name, price: price })

    // Clear the inputs
    setName("");
    setPrice(0);
  }
  
  return (
    <form onSubmit={handleFormSubmit} >
      <label>Item Name</label>
      <input name="name" value={name} onChange={handleNameInput} /> {/* type -> text (default), number, checkbox, email, password */}
      <br />
      
      <label>Item Price</label>
      <input type="number" name="price" value={price} onChange={handlePriceInput} />

      <select name="course" value={course} onChange={handleCourseInput} >
        <option value="Web Dev">Web Development</option>
        <option value="UX UI">UX UI</option>
        <option value="Data">Data Analytics</option>
      </select>

      <button type="submit">Create Item</button>
    </form>
  )
}


export default AddItemForm;