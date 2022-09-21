import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState('All')

  console.log(items)
  function handleFilterChange(event) {
    setCategory(event.target.value)
  }

  const newItemsArray = items.filter(item => item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {(selectedCategory === "All") ? (items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />))) :
          (newItemsArray.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          )))}
      </ul>
    </div>
  );
}

export default ShoppingList;
