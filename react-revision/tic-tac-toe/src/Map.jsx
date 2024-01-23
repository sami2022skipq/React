import React from "react";
import './App.css'
const CarsModels = ({ brand= "default" }) => {
  return (
    <li>
      <h2>This is {brand}</h2>
    </li>
  );
};

const Map = () => {
  const cars = [
    { id: 1, brand: "Suzuki" },
    { id: 2, brand: "Honda" },
    { id: 3, brand: "Toyota" },
    { id: 4, brand: "Hundai" },
  ];
  return (
    <>
      <h1>List</h1>
      <ol>
        {cars.map((car) => (
          <CarsModels key={car.id} brand={car.brand} />
        ))}
      </ol>
    </>
  );
};

export default Map;
