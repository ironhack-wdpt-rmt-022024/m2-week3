import './App.css'
import { useState } from 'react';
import AddItemForm from './components/AddItemForm';

const initialData = [
  { id: "1", name: "iPhone 15", price: 500 },
  { id: "2", name: "iPad Air", price: 700 },
  { id: "3", name: "iPhone 14", price: 800 }
]

fetch

function App() {
  const [items, setItems] = useState(initialData);

  const addItem = (newItem) => {
    const updatedItems = [newItem, ...items]
    setItems(updatedItems);
  }

  return (
    <>

      <AddItemForm addItem={addItem} />

      <h1> Items Info </h1>
      {items.map((item) => {
        return <li key={item.id}> {item.name} | {item.price} </li>
      })}
    </>
  )
}

export default App
