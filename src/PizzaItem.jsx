import React from 'react';

const PizzaItem = ({ pizza }) => {
  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'Sold Out' : `$${pizza.price}`}</span>
      </div>
    </li>
  );
};

// Using React.memo to prevent re-rendering of the component if the props are the same
export default React.memo(PizzaItem);
