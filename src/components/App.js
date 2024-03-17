import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(
    { topping: '', size: '', vegetarian: false }
  );

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((response) => response.json())
      .then(setPizzas);
  }, []);

  const handleEditPizzaClick = (pizza) => {
    setSelectedPizza(pizza);
  }

  const handleChangeForm = (name, value) => {
    setSelectedPizza({
      ...selectedPizza,
      [name]: value,
    });
  }

  const handleEditPizza = (editedPizza) => {
    const updatedPizzas = pizzas.map((pizza) => {
      return pizza.id === editedPizza.id ? editedPizza : pizza;
    });
    setPizzas(updatedPizzas);
  }

  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} onChangeForm={handleChangeForm} onEditPizza={handleEditPizza} />
      <PizzaList pizzas={pizzas} onEditClick={handleEditPizzaClick} />
    </>
  );
}

export default App;
