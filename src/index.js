import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import pizzaData from './data';

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
  return (
    <main className='menu'>
      <h2>Menu: </h2>
      <Pizza
        name='Pizza Name'
        ingredient='Ingredients'
        image='image.jpg'
        price={10}
      />
    </main>
  );
};

const Pizza = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name}></img>
      <h3>{props.name}</h3>
      <p>{props.ingredient}</p>
      <span>${props.price}</span>
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();

  // Check if the current time is between 12 and 23
  const openTime = 12;
  const closeTime = 23;
  const isOpen = hour >= openTime && hour <= closeTime;

  if (isOpen) {
    alert('We are open!');
  } else {
    alert('We are cloed!');
  }

  return <footer className='footer'>Footer</footer>;
};

// Create a root and render the App component under React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
// Start the root with the App component wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
