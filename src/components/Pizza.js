import React from "react";

function Pizza({ pizza, onEditClick }) {
  const { topping, size, vegetarian } = pizza;

  const handleEditClick = () => {
    onEditClick(pizza);
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEditClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
