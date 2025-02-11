import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { pizzaData } from './data';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className='header'>
      <h1>Pizzaria Name</h1>
    </header>
  );
};

const Menu = () => {
  const isNotEmpty = pizzaData?.length > 0;

  return (
    <main className='menu'>
      <h2>Menu: </h2>

      {isNotEmpty ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza, index) => (
            <Pizza key={index} {...pizza} />
          ))}
        </ul>
      ) : (
        <p>There are no pizzas available at the moment.</p>
      )}
    </main>
  );
};

const Pizza = (props) => {
  return (
    <li className='pizza'>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>${props.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();

  // Check if the current time is between 10 and 23
  const openTime = 10;
  const closeTime = 23;
  const isOpen = hour >= openTime && hour <= closeTime;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeTime={closeTime} />
      ) : (
        <p>
          We are closed. We open at {openTime}:00 AM. Visit us tomorrow or order
          online!
        </p>
      )}
    </footer>
  );
};

const Order = (props) => {
  return (
    <div className='order'>
      <p>
        We are open until {props.closeTime}:00 PM. Come visit us or order
        online!
      </p>
      <button className='btn'>Order Now</button>
    </div>
  );
};

// Create a root and render the App component under React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
// Start the root with the App component wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
